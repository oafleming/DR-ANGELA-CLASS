// Add interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcome-message');
    
    // Add a simple hover effect
    welcomeMessage.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    welcomeMessage.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Log to console
    console.log('Welcome to Dr Angela Course!! - App loaded successfully');
});
