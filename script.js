particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#000000"
      },
      shape: {
        type: "circle", 
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3, 
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#000000", 
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "attract" 
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      },
      mouse: {
        distance: 100,
        radius: 50 
      }
    },
    retina_detect: true
});

function rickroll() {
  const video = document.getElementById('rickrollVideo');
  const button = document.querySelector('.click-btn');
  const title = document.getElementById('title');
  const secondaryText = document.getElementById('secondary-text');
  const footerText = document.querySelector('.footer-text');
  const rickrollTitle = document.getElementById('rickroll-title');
  const musicMessage = document.getElementById('music-message');

  // Changer le fond en noir après le clic
  document.body.style.backgroundColor = '#000';

  // Afficher et lire la vidéo
  video.style.display = 'block';
  video.play();

  title.style.display = 'none';
  secondaryText.style.display = 'none';
  rickrollTitle.style.display = 'block';
  musicMessage.style.display = 'block';

  footerText.style.color = 'white';
  button.style.display = 'none';
}
