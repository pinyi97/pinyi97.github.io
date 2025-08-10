// 搜索功能实现
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.search-input');
  const searchBtn = document.querySelector('.search-btn');
  
  // 搜索按钮点击事件
  searchBtn.addEventListener('click', function() {
    performSearch();
  });
  
  // 搜索框回车事件
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
  
  // 执行搜索
  function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
      // 实际项目中，这里会发起搜索请求
      // 这里使用简单的页面跳转模拟
      window.location.href = `/search/?q=${encodeURIComponent(query)}`;
    }
  }
  
  // 筛选功能
  const filterSelect = document.querySelector('.filter-select');
  filterSelect.addEventListener('change', function() {
    const value = this.value;
    // 根据选择的筛选条件重新加载或过滤文章
    if (value === 'recent') {
      // 最新发布逻辑
      sortPostsByDate();
    } else if (value === 'popular') {
      // 热门文章逻辑
      sortPostsByPopularity();
    } else {
      // 所有文章
      resetPostOrder();
    }
  });
  
  // 模拟文章排序功能
  function sortPostsByDate() {
    console.log('排序为最新发布');
    // 实际项目中实现文章排序逻辑
  }
  
  function sortPostsByPopularity() {
    console.log('排序为热门文章');
    // 实际项目中实现文章排序逻辑
  }
  
  function resetPostOrder() {
    console.log('显示所有文章');
    // 实际项目中实现重置文章顺序逻辑
  }
  
  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
