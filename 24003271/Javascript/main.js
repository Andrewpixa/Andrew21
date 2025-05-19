// 检查登录状态
document.addEventListener('DOMContentLoaded', function() {
    // 从本地存储获取登录状态
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username');
    
    // 如果未登录，重定向到登录页面
    if (!isLoggedIn) {
        window.location.href = '/24003271/index.html';
        return;
    }
    
    // 显示用户名
    document.getElementById('userName').textContent = username;
    
    // 增加一些动画效果
    initAnimations();
});

// 退出登录
document.getElementById('logoutBtn').addEventListener('click', function(e) {
    e.preventDefault();
    
    // 清除登录状态
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    
    // 重定向到登录页面
    window.location.href = '/24003271/index.html';
});

// 初始化动画效果
function initAnimations() {
    // 统计卡片动画
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 150);
    });
    
    // 活动项目动画
    const activityItems = document.querySelectorAll('.activity-item');
    
    activityItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 100);
        }, index * 200);
    });
    
    // 欢迎卡片动画
    const welcomeCard = document.querySelector('.welcome-card');
    
    setTimeout(() => {
        welcomeCard.style.opacity = '0';
        welcomeCard.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            welcomeCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            welcomeCard.style.opacity = '1';
            welcomeCard.style.transform = 'translateY(0)';
        }, 200);
    }, 300);
}