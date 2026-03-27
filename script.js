function createHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️'; // Neenga '✨' or '🌸' kooda mathalam
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 400);
}

function next(page) {
    // Adding a small fade-out feel before jumping
    document.querySelector('.box').style.opacity = '0';
    document.querySelector('.box').style.transition = '0.5s';
    setTimeout(() => {
        window.location.href = page;
    }, 500);
}