let slideIndex = 1;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let autoSlideInterval;
let isPaused = false;

// 初始化轮播
showSlides(slideIndex);

// 自动轮播
autoSlide();

// 点击圆点切换图片
function currentSlide(n) {
    showSlides(slideIndex = n);
    pauseAutoSlide();
}

// 显示指定幻灯片
function showSlides(n) {
    let i;
    
    // 隐藏所有幻灯片
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // 移除所有圆点的活动状态
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // 显示当前幻灯片并激活对应圆点
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// 自动轮播
function autoSlide() {
    autoSlideInterval = setInterval(function() {
        if (slideIndex < slides.length) {
            slideIndex++;
        } else {
            slideIndex = 1;
        }
        showSlides(slideIndex);
    }, 5000); // 5秒切换一次
}

// 暂停自动轮播
function pauseAutoSlide() {
    clearInterval(autoSlideInterval);
    isPaused = true;
    
    // 5秒后恢复自动轮播
    setTimeout(function() {
        if (isPaused) {
            autoSlide();
            isPaused = false;
        }
    }, 5000);
}