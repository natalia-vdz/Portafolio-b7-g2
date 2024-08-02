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