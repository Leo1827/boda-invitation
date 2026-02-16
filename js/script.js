
const preloader = document.getElementById('preloader');
    
  // Función para generar corazones pequeños
  function spawnHeart() {
    const heart = document.createElement('div');
    heart.classList.add('small-heart');

    // Posición aleatoria alrededor del corazón central
    const x = (Math.random() - 0.5) * 60; // horizontal ±30px
    const y = -Math.random() * 80 - 20;   // vertical hacia arriba
    heart.style.setProperty('--x', x + 'px');
    heart.style.setProperty('--y', y + 'px');

    preloader.appendChild(heart);

    // Eliminar después de animación
    setTimeout(() => heart.remove(), 2000);
  }

  // Crear pequeños corazones cada 300ms
  const interval = setInterval(spawnHeart, 300);

  // Ocultar preloader al cargar la página
  window.addEventListener('load', () => {
    clearInterval(interval);
    preloader.style.transition = 'opacity 0.5s';
    preloader.style.opacity = 0;
    setTimeout(() => preloader.remove(), 500);
  });

  const weddingDate = new Date("May 17, 2026 00:00:00").getTime();

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
      clearInterval(countdown);
      document.querySelector(".countdown-time").innerHTML = "¡Es Hoy!";
    }
  }, 1000);


  function openModal() {
    document.getElementById('giftModal').classList.remove('hidden');
    document.getElementById('giftModal').classList.add('flex');
  }

  function closeModal() {
    document.getElementById('giftModal').classList.add('hidden');
    document.getElementById('giftModal').classList.remove('flex');
  }