// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// FAQ 折叠/展开功能
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // 关闭所有FAQ项
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // 如果当前项不是活跃状态，则打开它
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// 滚动时导航栏样式变化
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(10, 14, 39, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'rgba(10, 14, 39, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// 模块卡片悬停效果增强
document.addEventListener('DOMContentLoaded', function() {
    const moduleCards = document.querySelectorAll('.module-card');
    
    moduleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// 统计数字动画
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-value');
    
    statNumbers.forEach(number => {
        const target = parseInt(number.textContent);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                number.textContent = target;
                clearInterval(timer);
            } else {
                number.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// 当统计数字进入视口时触发动画
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const heroSection = document.querySelector('.hero');
if (heroSection) {
    observer.observe(heroSection);
}