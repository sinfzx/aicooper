import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testMemoryAPI() {
  try {
    console.log('🧪 测试记忆 API 功能...');
    
    // 1. 测试获取记忆列表
    console.log('\n1. 测试获取记忆列表...');
    const memories = await prisma.memory.findMany({
      where: { userId: 'default-user' },
      orderBy: { date: 'desc' }
    });
    console.log(`✅ 找到 ${memories.length} 条记忆`);
    
    if (memories.length > 0) {
      const firstMemory = memories[0];
      console.log(`   第一条记忆: "${firstMemory.title}"`);
      
      // 2. 测试获取单个记忆
      console.log('\n2. 测试获取单个记忆...');
      const singleMemory = await prisma.memory.findFirst({
        where: { 
          id: firstMemory.id,
          userId: 'default-user'
        }
      });
      console.log(`✅ 获取记忆: "${singleMemory?.title}"`);
      
      // 3. 测试更新记忆
      console.log('\n3. 测试更新记忆...');
      const updatedMemory = await prisma.memory.update({
        where: { id: firstMemory.id },
        data: { 
          tags: [...firstMemory.tags, '测试标签']
        }
      });
      console.log(`✅ 更新记忆标签: ${updatedMemory.tags.join(', ')}`);
      
      // 恢复原始标签
      await prisma.memory.update({
        where: { id: firstMemory.id },
        data: { tags: firstMemory.tags }
      });
    }
    
    // 4. 测试创建记忆
    console.log('\n4. 测试创建记忆...');
    const newMemory = await prisma.memory.create({
      data: {
        title: '测试记忆',
        content: '这是一个测试记忆，用于验证 API 功能。',
        date: new Date(),
        location: '测试地点',
        people: ['测试人员'],
        tags: ['测试', 'API'],
        emotions: ['好奇'],
        visibility: 'private',
        userId: 'default-user'
      }
    });
    console.log(`✅ 创建记忆: "${newMemory.title}" (ID: ${newMemory.id})`);
    
    // 5. 测试搜索记忆
    console.log('\n5. 测试搜索记忆...');
    const searchResults = await prisma.memory.findMany({
      where: {
        userId: 'default-user',
        OR: [
          { title: { contains: '测试', mode: 'insensitive' } },
          { content: { cont