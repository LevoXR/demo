// Update current time
function updateTime() {
    const now = new Date();
    document.getElementById('current-time').textContent = now.toLocaleString();
}

// Update page load time
function updateLoadTime() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    document.getElementById('load-time').textContent = `${loadTime}ms`;
}

// Button click counter
let clickCount = 0;
function setupButton() {
    const button = document.getElementById('click-btn');
    const counter = document.getElementById('click-counter');
    
    button.addEventListener('click', function() {
        clickCount++;
        counter.textContent = `Button clicked: ${clickCount} time${clickCount !== 1 ? 's' : ''}`;
        
        // Add some visual feedback
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    });
}

// Display user agent
function showUserAgent() {
    document.getElementById('user-agent').textContent = navigator.userAgent;
}

// Update footer year
function updateFooterYear() {
    document.getElementById('footer-year').textContent = new Date().getFullYear();
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateLoadTime();
    updateTime();
    showUserAgent();
    setupButton();
    updateFooterYear();
    
    // Update time every second
    setInterval(updateTime, 1000);
});

// Add some console fun
console.log('🚀 VPS Test Site Loaded Successfully!');
console.log('Your server is working perfectly!');
