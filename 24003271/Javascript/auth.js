document.addEventListener('DOMContentLoaded', function() {
    // 存储用户数据的模拟数据库
    let users = JSON.parse(localStorage.getItem('users')) || [
        { username: 'admin', password: 'password123', email: 'admin@example.com' },
		 { username: '123465', password: '123456', email: 'admin@example.com' }
    ];

    // DOM 元素
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const notification = document.getElementById('notification');

    // 切换密码可见性
    const togglePassword = document.getElementById('togglePassword');
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const passwordInput = document.getElementById('password');
            this.classList.toggle('fa-eye-slash');
            passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
        });
    }

    // 显示加载动画
    function showLoading() {
        if (loadingOverlay) {
            loadingOverlay.classList.add('visible');
        }
    }

    // 隐藏加载动画
    function hideLoading() {
        if (loadingOverlay) {
            loadingOverlay.classList.remove('visible');
        }
    }

    // 显示通知
    function showNotification(message) {
        if (notification) {
            notification.querySelector('span').textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
    }

    // 登录功能
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 显示加载动画
            showLoading();
            
            // 获取表单数据
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // 输出用户名和密码（仅用于测试）
            console.log('用户名：', username);
            console.log('密码：', password);
            
            // 模拟API请求延迟
            setTimeout(() => {
                // 检查用户是否存在
                const user = users.find(u => u.username === username && u.password === password);
                
                if (user) {
                    // 登录成功
                    hideLoading();
                    // 保存登录状态到本地存储
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('username', username);
                    
                    // 重定向到主页面
                    window.location.href = '/24003271/new_Html/main.html';
                } else {
                    // 登录失败
                    hideLoading();
                    alert('用户名或密码错误！请检查您的输入或尝试找回密码。');
                }
            }, 1000);
        });
    }

    // 注册功能
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 显示加载动画
            showLoading();
            
            // 获取表单数据
            const username = document.getElementById('registerUsername').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // 验证表单
            if (password !== confirmPassword) {
                hideLoading();
                alert('两次输入的密码不一致！');
                return;
            }
            
            // 检查用户名是否已存在
            if (users.some(u => u.username === username)) {
                hideLoading();
                alert('该用户名已被注册！');
                return;
            }
            
            // 模拟API请求延迟
            setTimeout(() => {
                // 创建新用户
                users.push({ username, password, email });
                
                // 保存用户数据到本地存储
                localStorage.setItem('users', JSON.stringify(users));
                
                // 注册成功
                hideLoading();
                showNotification('注册成功！');
                
                // 2秒后重定向到登录页面
                setTimeout(() => {
                    window.location.href = '/24003271/index.html';
                }, 2000);
            }, 1500);
        });
    }

    // 忘记密码功能
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 显示加载动画
            showLoading();
            
            // 获取表单数据
            const email = document.getElementById('resetEmail').value;
            
            // 模拟API请求延迟
            setTimeout(() => {
                // 检查邮箱是否存在于用户数据库中
                const user = users.find(u => u.email === email);
                
                if (user) {
                    // 发送成功
                    hideLoading();
                    showNotification('密码重置邮件已发送！');
                    
                    // 2秒后重定向到登录页面
                    setTimeout(() => {
                        window.location.href = '/24003271/index.html';
                    }, 2000);
                } else {
                    // 发送失败
                    hideLoading();
                    alert('该邮箱未注册！');
                }
            }, 1500);
        });
    }

    // 忘记密码链接
    const forgotPasswordLink = document.getElementById('forgotPassword');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = '/24003271/forgot-password.html';
        });
    }

    // 添加页面加载时的动画效果
    createLoginBgPattern();
});

// 创建登录背景图案
function createLoginBgPattern() {
    const loginBg = document.querySelector('.login-bg');
    
    if (loginBg) {
        // 创建一些小圆圈作为背景装饰
        for (let i = 0; i < 20; i++) {
            const circle = document.createElement('div');
            circle.classList.add('bg-circle');
            
            // 随机大小
            const size = Math.random() * 100 + 20;
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;
            
            // 随机位置
            circle.style.left = `${Math.random() * 100}%`;
            circle.style.top = `${Math.random() * 100}%`;
            
            // 随机颜色
            const hue = Math.floor(Math.random() * 360);
            circle.style.backgroundColor = `hsla(${hue}, 70%, 70%, 0.2)`;
            
            // 添加到背景
            loginBg.appendChild(circle);
        }
    }
}