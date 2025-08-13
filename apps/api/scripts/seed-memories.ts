import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const sampleMemories = [
  {
    title: '春日樱花盛开',
    content: '今天和朋友们一起去公园赏樱花，樱花开得正盛，粉色的花瓣在微风中飘落，就像下雪一样美丽。我们在樱花树下野餐，聊天，拍照，度过了愉快的一天。',
    date: new Date('2024-04-15'),
    location: '中山公园',
    people: ['小明', '小红', '小李'],
    tags: ['春天', '樱花', '野餐', '朋友'],
    emotions: ['快乐', '放松', '美好'],
    visibility: 'private'
  },
  {
    title: '毕业典礼',
    content: '大学毕业典礼，穿着学士服和同学们一起拍照留念。四年的大学时光即将结束，心情既兴奋又不舍。感谢所有帮助过我的老师和同学们。',
    date: new Date('2023-06-20'),
    location: '大学礼堂',
    people: ['室友们', '导师', '同班同学'],
    tags: ['毕业', '大学', '成长', '友谊'],
    emotions: ['兴奋', '不舍', '感激'],
    visibility: 'shared'
  },
  {
    title: '第一次做饭',
    content: '今天第一次尝试做红烧肉，虽然过程有些手忙脚乱，但最终成品还不错。妈妈在视频通话中指导我，感觉很温馨。',
    date: new Date('2024-01-10'),
    location: '家里厨房',
    people: ['妈妈'],
    tags: ['做饭', '学习', '家庭', '成长'],
    emotions: ['紧张', '成就感', '温馨'],
    visibility: 'private'
  },
  {
    title: '海边日落',
    content: '在海边看日落，夕阳西下，天空被染成了橙红色。海浪轻拍着沙滩，海鸥在空中飞翔。这一刻感觉时间都静止了，内心无比平静。',
    date: new Date('2024-07-22'),
    location: '青岛海滩',
    people: [],
    tags: ['海边', '日落', '自然', '独处'],
    emotions: ['平静', '美好', '感动'],
    visibility: 'public'
  },
  {
    title: '生日聚会',
    content: '朋友们为我准备了惊喜生日聚会，蛋糕、礼物、祝福，一切都让我感动不已。这些朋友真的很珍贵，感谢有他们陪伴。',
    date: new Date('2024-03-08'),
    location: '朋友家',
    people: ['小王', '小张', '小刘', '小陈'],
    tags: ['生日', '聚会', '友谊', '惊喜'],
    emotions: ['感动', '快乐', '感激'],
    visibility: 'private'
  }
];

async function seedMemories() {
  try {
    console.log('开始创建测试记忆数据...');
    
    // 首先确保有一个测试用户
    let user = await prisma.user.findFirst({
      where: { email: 'test@example.com' }
    });
    
    if (!user) {
      user = await prisma.user.create({
        data: {
          name: '测试用户',
          email: 'test@example.com'
        }
      });
      console.log('创建了测试用户:', user.id);
    }
    
    // 清除现有的记忆数据
    await prisma.memory.deleteMany({
      where: { userId: user.id }
    });
    
    // 创建示例记忆
    for (const memoryData of sampleMemories) {
      const memory = await prisma.memory.create({
        data: {
          ...memoryData,
          userId: user.id
        }
      });
      console.log(`创建记忆: ${memory.title}`);
    }
    
    console.log('测试记忆数据创建完成！');
  } catch (error) {
    console.error('创建测试数据失败:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// 运行脚本
seedMemories();

export { seedMemories };