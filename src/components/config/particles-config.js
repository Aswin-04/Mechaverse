export const customizedOptions = {
  autoPlay: true,
  background: {
    color: { value: "#020809" },
    opacity: 1
  },
  clear: true,
  detectRetina: true,
  fpsLimit: 60, 
  fullScreen: {
    enable: true,
    zIndex: 0
  },
  interactivity: {
    detectsOn: "window",
    events: {
      resize: { enable: true, delay: 0.5 }
    },
    modes: {}
  },
  particles: {
    bounce: {
      horizontal: { value: 1 },
      vertical: { value: 1 }
    },
    collisions: {
      enable: false
    },
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 40,
        sync: true
      }
    },
    move: {
      direction: "bottom",
      enable: true,
      outModes: {
        default: "out"
      },
      speed: 5,
      straight: false
    },
    number: {
      density: { enable: true, width: 1920, height: 1080 },
      value: 100
    },
    opacity: {
      value: 0.6
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 3 }
    }
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  zLayers: 100,
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true
    }
  }
};
