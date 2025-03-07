<script>
  import { onMount } from "svelte";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import "../styles/global.css";
  import "../styles/fireworks.css";

  import AOS from "aos";
  import "aos/dist/aos.css";

  let theme = "dark"; // Sticking with dark for now

  onMount(() => {
    // Just dark theme for now until I build out the light theme
    theme = "dark";
    localStorage.setItem("theme", "dark");

    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: false,
      mirror: true,
      offset: 150,
      delay: 100,
      anchorPlacement: 'top-bottom',
      disableMutationObserver: false,
    });
    
    // Fire up the background effects
    initFireworks();
  });

  function toggleTheme() {
    theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }
  
  // The magic behind the scenes
  function initFireworks() {
    const container = document.querySelector('.fireworks-container');
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    
    function resizeCanvas() {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
    
    container.appendChild(canvas);
    resizeCanvas();
    
    window.addEventListener('resize', resizeCanvas);
    
    class Firework {
      constructor(options = {}) {
        this.options = {
          hue: {
            min: 0,
            max: 360
          },
          rocketsPoint: {
            min: 50,
            max: 50
          },
          opacity: 0.5,
          acceleration: 1.05,
          friction: 0.95,
          gravity: 1.5,
          particles: 50,
          traceLength: 3,
          traceSpeed: 10,
          explosion: 5,
          intensity: 30,
          flickering: 30,
          lineWidth: {
            explosion: {
              min: 1,
              max: 3
            },
            trace: {
              min: 1,
              max: 2
            }
          },
          brightness: {
            min: 50,
            max: 80
          },
          decay: {
            min: 0.015,
            max: 0.03
          },
          ...options
        };
        
        this.tick = 0;
        this.rockets = [];
        this.particles = [];
        this.boundaries = {
          x: 0,
          y: 0,
          width: canvas.width,
          height: canvas.height
        };
        
        this.running = true;
      }
      
      randomRange(min, max) {
        return Math.random() * (max - min) + min;
      }
      
      randomValue(option) {
        return this.randomRange(option.min, option.max);
      }
      
      launch(count = 1) {
        for (let i = 0; i < count; i++) {
          // Let's mix up the launch positions a bit
          const launchPosition = this.randomRange(0, 100);
          
          let x, y, vx, vy, explosionHeight;
          
          // Made this more natural looking with varied launch points
          if (launchPosition < 30) {
            // From the bottom
            x = this.randomRange(0.1, 0.9) * this.boundaries.width;
            y = this.boundaries.height;
            vx = this.randomRange(-1.0, 1.0);
            vy = this.randomRange(-7, -5);
            explosionHeight = this.randomRange(0.1, 0.8) * this.boundaries.height;
          } else if (launchPosition < 45) {
            // Coming in from the left
            x = 0;
            y = this.randomRange(0.2, 0.8) * this.boundaries.height;
            vx = this.randomRange(1.5, 3);
            vy = this.randomRange(-3, -1.5);
            explosionHeight = this.randomRange(0.1, 0.7) * this.boundaries.height;
          } else if (launchPosition < 60) {
            // Coming in from the right
            x = this.boundaries.width;
            y = this.randomRange(0.2, 0.8) * this.boundaries.height;
            vx = this.randomRange(-3, -1.5);
            vy = this.randomRange(-3, -1.5);
            explosionHeight = this.randomRange(0.1, 0.7) * this.boundaries.height;
          } else {
            // The surprise ones that pop in mid-air
            x = this.randomRange(0.1, 0.9) * this.boundaries.width;
            y = this.randomRange(0.1, 0.8) * this.boundaries.height;
            vx = this.randomRange(-0.3, 0.3);
            vy = this.randomRange(-0.3, 0.3);
            explosionHeight = y - this.randomRange(5, 20);
          }
          
          const rocket = {
            x,
            y,
            vx,
            vy,
            size: this.randomValue(this.options.lineWidth.trace),
            color: `hsl(${this.randomValue(this.options.hue)}, 100%, 50%)`,
            acceleration: this.options.acceleration,
            friction: this.options.friction,
            gravity: this.options.gravity * (launchPosition >= 60 ? 0.05 : 0.4),
            flickering: this.randomRange(0, 100) <= this.options.flickering,
            lineWidth: this.randomValue(this.options.lineWidth.trace),
            explosionColorAlpha: 1,
            explosionParticles: this.options.particles + Math.floor(this.randomRange(-10, 20)),
            explosionChance: launchPosition >= 60 ? 0.05 : 0.01,
            explosionTimer: launchPosition >= 60 ? this.randomRange(20, 40) : this.randomRange(40, 80),
            targetHeight: explosionHeight,
            hasReachedApex: false,
            initialVY: vy
          };
          
          this.rockets.push(rocket);
        }
      }
      
      updateRockets() {
        this.rockets.forEach((rocket, i) => {
          // Physics stuff
          rocket.vx *= rocket.friction;
          rocket.vy *= rocket.friction;
          rocket.vy += rocket.gravity;
          
          rocket.x += rocket.vx;
          rocket.y += rocket.vy;
          
          if (!rocket.hasReachedApex && rocket.initialVY < 0 && rocket.vy > -0.5) {
            rocket.hasReachedApex = true;
          }
          
          rocket.explosionTimer--;
          
          // When should it go boom?
          const shouldExplode = 
            (rocket.x < 0 || rocket.x > this.boundaries.width) ||
            (rocket.y <= rocket.targetHeight) ||
            (rocket.explosionTimer <= 0) ||
            (rocket.hasReachedApex && Math.random() < rocket.explosionChance);
            
          if (shouldExplode) {
            this.createExplosion(
              rocket.x, 
              Math.min(rocket.y, this.boundaries.height * 0.9),
              rocket.color, 
              rocket.explosionParticles
            );
            
            this.rockets.splice(i, 1);
          } else {
            // Draw the rocket
            ctx.save();
            ctx.globalAlpha = rocket.flickering ? this.randomRange(0.5, 1) : 1;
            ctx.fillStyle = rocket.color;
            
            ctx.beginPath();
            ctx.arc(rocket.x, rocket.y, rocket.size, 0, Math.PI * 2);
            ctx.fill();
            
            // And its trail
            ctx.strokeStyle = rocket.color;
            ctx.lineWidth = rocket.lineWidth;
            ctx.beginPath();
            ctx.moveTo(rocket.x, rocket.y);
            ctx.lineTo(
              rocket.x - rocket.vx * this.options.traceLength,
              rocket.y - rocket.vy * this.options.traceLength
            );
            ctx.stroke();
            
            ctx.restore();
          }
        });
      }
      
      createExplosion(x, y, color, count) {
        // That bright flash when it explodes
        ctx.save();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        const hue = parseInt(color.match(/hsl\((\d+)/)[1]);
        
        // Mix up the explosion types for variety
        const explosionType = Math.floor(this.randomRange(0, 4));
        
        for (let i = 0; i < count; i++) {
          let angle, speed, gravity;
          
          // Different explosion shapes
          switch (explosionType) {
            case 0: // Plain circle
              angle = this.randomRange(0, Math.PI * 2);
              speed = this.randomRange(0.5, 3);
              gravity = this.options.gravity * 0.15;
              break;
            case 1: // The flower-like one
              angle = (i / count) * Math.PI * 2;
              speed = this.randomRange(1, 2.5) + (i % 3) * 0.3;
              gravity = this.options.gravity * 0.08;
              break;
            case 2: // The one with the long trails
              angle = this.randomRange(0, Math.PI * 2);
              speed = this.randomRange(0.4, 2);
              gravity = this.options.gravity * 0.01;
              break;
            case 3: // The fan-shaped one
              angle = this.randomRange(Math.PI * 0.7, Math.PI * 2.3);
              speed = this.randomRange(1, 3);
              gravity = this.options.gravity * 0.05;
              break;
          }
          
          const size = this.randomValue(this.options.lineWidth.explosion);
          const life = this.randomRange(80, 150);
          
          const hueVariation = this.randomRange(-20, 20);
          const brightness = this.randomValue(this.options.brightness);
          
          const particle = {
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size,
            color: `hsl(${hue + hueVariation}, 100%, ${brightness}%)`,
            alpha: 1,
            decay: this.randomValue(this.options.decay) * 0.25,
            gravity,
            life,
            maxLife: life
          };
          
          this.particles.push(particle);
        }
      }
      
      updateParticles() {
        this.particles.forEach((particle, i) => {
          // More physics
          particle.vx *= this.options.friction;
          particle.vy *= this.options.friction;
          particle.vy += particle.gravity;
          
          particle.x += particle.vx;
          particle.y += particle.vy;
          
          // Slow fade at first, then faster at the end
          if (particle.life > particle.maxLife * 0.3) {
            particle.alpha -= particle.decay * 0.5;
          } else {
            particle.alpha -= particle.decay * 1.5;
          }
          
          particle.life--;
          
          if (particle.alpha <= 0 || particle.life <= 0) {
            this.particles.splice(i, 1);
            return;
          }
          
          // Draw the particle
          ctx.save();
          ctx.globalAlpha = particle.alpha;
          ctx.fillStyle = particle.color;
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
        });
      }
      
      clear() {
        // Clean up with a fade effect
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'lighter';
      }
      
      render() {
        if (!this.running) return;
        
        this.clear();
        this.updateRockets();
        this.updateParticles();
        
        // Launch new ones periodically
        this.tick++;
        if (this.tick % 18 === 0 && Math.random() * 100 < this.options.intensity) {
          if (Math.random() < 0.3) {
            // Those cool ones that appear out of nowhere
            const x = this.randomRange(0.1, 0.9) * this.boundaries.width;
            const y = this.randomRange(0.1, 0.6) * this.boundaries.height;
            const count = Math.floor(this.randomRange(40, 100));
            const hue = this.randomValue(this.options.hue);
            const color = `hsl(${hue}, 100%, 50%)`;
            
            this.createExplosion(x, y, color, count);
          } else {
            // Regular launches
            const count = Math.random() < 0.1 ? 2 : 1;
            this.launch(count);
          }
        }
        
        requestAnimationFrame(() => this.render());
      }
      
      start() {
        this.running = true;
        this.render();
        
        // Kick off with a few initial fireworks
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            this.launch(1);
          }, i * 1500);
        }
      }
      
      stop() {
        this.running = false;
      }
    }
    
    // Set up with my preferred settings
    const fireworks = new Firework({
      intensity: 12,
      friction: 0.99,
      gravity: 0.35,
      particles: 60,
      flickering: 50,
      opacity: 0.2,
      lineWidth: {
        explosion: {
          min: 1,
          max: 3
        },
        trace: {
          min: 1,
          max: 3
        }
      },
      hue: {
        min: 0,
        max: 360
      },
      rocketsPoint: {
        min: 20,
        max: 80
      },
      decay: {
        min: 0.0015,
        max: 0.004
      },
      brightness: {
        min: 60,
        max: 90
      }
    });
    
    fireworks.start();
    
    // Clean up when needed
    return () => {
      fireworks.stop();
      window.removeEventListener('resize', resizeCanvas);
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }
</script>

<svelte:head>
  <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
</svelte:head>

<!-- Full-Site Dynamic Gradient Background -->
<div class="{theme} dark relative min-h-screen overflow-hidden bg-gray-900">
  <!-- Fireworks Background -->
  <div class="fireworks-container">
    <!-- Canvas will be added here via JavaScript -->
  </div>
  
  <!-- Backdrop blur overlay for better text readability -->
  <div class="absolute inset-0 backdrop-blur-md bg-black/40 z-[5]"></div>

  <!-- Navbar -->
  <Navbar on:toggleTheme={toggleTheme} class="relative z-[10]" />
  
  <!-- Main Content -->
  <main class="relative min-h-screen text-white z-[10]">
    <slot /> <!-- Page Content Gets Inserted Here -->
  </main>

  <!-- Footer component - properly positioned above blur -->
  <div class="relative z-[10]">
    <Footer />
  </div>
</div>

<style>
  /* Fireworks container */
  .fireworks-container {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 1;
  }
</style>