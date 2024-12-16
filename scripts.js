document.addEventListener('DOMContentLoaded', () => {
    // Snow animation
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.width = Math.random() * 10 + 5 + 'px'; // Random size
        snowflake.style.height = snowflake.style.width; // Keep it circular
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall duration
        document.querySelector('.snow').appendChild(snowflake);
        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    setInterval(createSnowflake, 300);

    // Play music functionality
    const playMusicButton = document.getElementById('play-music');
    playMusicButton.addEventListener('click', () => {
        const audio = new Audio('Taketones_JingleBells.mp3'); // Replace with actual music file path
        audio.play();
    });

    // Salute button functionality
    const saluteButton = document.getElementById('salute-button');
    saluteButton.addEventListener('click', () => {
        const salute = document.createElement('div');
        salute.classList.add('salute');
        salute.textContent = '🎆 Салют! 🎇';
        document.body.appendChild(salute);
        setTimeout(() => {
            salute.remove();
        }, 2000);

        // Salute animation
        for (let i = 0; i < 10; i++) {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            firework.style.left = Math.random() * 100 + 'vw';
            firework.style.top = Math.random() * 100 + 'vh';
            document.body.appendChild(firework);
            setTimeout(() => {
                firework.remove();
            }, 2000);
        }
    });
});
