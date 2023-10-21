function slideToHomePage() {
    const container = document.querySelector('.slide-container');
    container.style.transform = 'translateX(-100%)'; 
    setTimeout(() => {
        window.location.href = 'index.html'; 
    }, 500); 

    
}