// alert ("Hola Mundo")

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(2500)
    .typeString('Natalia Ayala')
    .pauseFor(300)
    .deleteAll()
    .typeString('<strong><span style="color: #f7d979;">Biológa en formación</span></strong>')
    .pauseFor(1000)
    .deleteAll()
    .typeString('<strong><span style="color: #f1c40f;">Desarrolladora FRONTED JR</span></strong>')
    .pauseFor(1000)
    .start();

    let customFontElement = document.getElementById('custom-font');

    // Crea una nueva instancia de Typewriter para el elemento
    let typewriterCustomFont = new Typewriter(customFontElement, {
      loop: true,
      delay: 75,
    });
    
    // Configura el efecto de máquina de escribir
    typewriterCustomFont
      .pauseFor(2500)
      .typeString(' "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar" ')
      .pauseFor(300)
      .deleteAll()
      .start();

      document.addEventListener('DOMContentLoaded', function() {
        const emailButton = document.getElementById('copiar-email');
        const email = emailButton.textContent;
    
        emailButton.addEventListener('click', async function() {
          try {
            await navigator.clipboard.writeText(email);
            alert('¡Correo electrónico copiado al portapapeles!');
          } catch (err) {
            console.error('Error al copiar el correo electrónico:', err);
          }
        });
      });

      document.addEventListener('DOMContentLoaded', function() {
        const musicButton = document.querySelector('.music-button i');
        const backgroundMusic = document.getElementById('background-music');
      
        // Configura el volumen del audio
        backgroundMusic.volume = 0.1; // Volumen bajo, puedes ajustar este valor si es necesario
      
        musicButton.addEventListener('click', function() {
          if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicButton.style.color = '#f7d979'; // Cambia el color del ícono para indicar que la música está activa
          } else {
            backgroundMusic.pause();
            musicButton.style.color = '#f1c40f'; // Restaura el color del ícono cuando la música está en pausa
          }
        });
      });