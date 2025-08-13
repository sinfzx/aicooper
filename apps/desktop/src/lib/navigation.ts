/**
 * 导航工具函数
 * 提供统一的页面导航方法
 */

export const navigateToDetail = (type: 'knowledge' | 'templates' | 'flows', id: string) => {
  if (typeof window !== 'undefined') {
    const routes = {
      knowledge: `/knowledge/${id}`,
      templates: `/templates/${id}`,
      flows: `/flows/${id}`
    };
    
    window.location.href = routes[type];
  }
};

export const navigateBack = () => {
  if (typeof window !== 'undefined') {
    window.history.back();
  }
};

export const navigateToHome = () => {
  if (typeof window !== 'undefined') {
    window.location.href = '/';
  }
};

export const navigateToTab = (tab: string) => {
  if (typeof window !== 'undefined') {
    // 由于我们使用单页应用，这里可以触发状态更新
    // 实际实现可能需要使用状态管理或路由
    console.log(`Navigate to tab: ${tab}`);
  }
};