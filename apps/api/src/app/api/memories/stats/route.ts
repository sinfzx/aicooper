import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET /api/memories/stats - 获取记忆统计信息
export async function GET(request: NextRequest) {
  try {
    const now = new Date();
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const thisYear = new Date(now.getFullYear(), 0, 1);
    
    const userId = 'default-user'; // TODO: 从认证中获取真实用户ID
    
    // 获取基本统计
    const [
      totalMemories,
      memoriesThisMonth,
      memoriesThisYear,
      aiGeneratedCount,
      allMemories
    ] = await Promise.all([
      prisma.memory.count({
        where: { userId }
      }),
      prisma.memory.count({
        where: {
          userId,
          createdAt: {
            gte: thisMonth
          }
        }
      }),
      prisma.memory.count({
        where: {
          userId,
          createdAt: {
            gte: thisYear
          }
        }
      }),
      prisma.memory.count({
        where: {
          userId,
          aiGenerated: true
        }
      }),
      prisma.memory.findMany({
        where: { userId },
        select: {
          location: true,
          people: true,
          emotions: true
        }
      })
    ]);
    
    // 统计位置
    const locationCounts: Record<string, number> = {};
    allMemories.forEach(memory => {
      if (memory.location) {
        locationCounts[memory.location] = (locationCounts[memory.location] || 0) + 1;
      }
    });
    
    // 统计人物
    const peopleCounts: Record<string, number> = {};
    allMemories.forEach(memory => {
      memory.people.forEach(person => {
        peopleCounts[person] = (peopleCounts[person] || 0) + 1;
      });
    });
    
    // 统计情感
    const emotionCounts: Record<string, number> = {};
    allMemories.forEach(memory => {
      memory.emotions.forEach(emotion => {
        emotionCounts[emotion] = (emotionCounts[emotion] || 0) + 1;
      });
    });
    
    const stats = {
      totalMemories,
      memoriesThisMonth,
      memoriesThisYear,
      topLocations: Object.entries(locationCounts)
        .map(([location, count]) => ({ location, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5),
      topPeople: Object.entries(peopleCounts)
        .map(([person, count]) => ({ person, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5),
      topEmotions: Object.entries(emotionCounts)
        .map(([emotion, count]) => ({ emotion, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5),
      aiGeneratedCount
    };
    
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Failed to load stats:', error);
    return NextResponse.json(
      { error: 'Failed to load stats' },
      { status: 500 }
    );
  }
}