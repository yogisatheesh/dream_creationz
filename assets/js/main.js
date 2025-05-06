particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": ["#FFD700", "#7B2CBF"] },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.6,
      "random": true
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": { "enable": false },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "repulse": { "distance": 100 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});
