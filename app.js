particlesJS("particles-js", {
  particles: {
    number: {
      value: 80, // Nombre de particules
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#000000" // Couleur des particules en noir
    },
    shape: {
      type: "circle", // Forme des particules
    },
    opacity: {
      value: 0.5, // Opacité des particules
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3, // Taille des particules
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
      color: "#000000", // Couleur des lignes qui relient les particules
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
        mode: "repulse" // Les particules vont se repousser
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    mouse: {
      distance: 100, // Distance d'interaction de la souris avec les particules
      radius: 50 // Rayon autour de la souris où les particules seront attirées
    }
  },
  retina_detect: true
});
