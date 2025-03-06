<script>
  import { onMount } from "svelte";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import "../styles/global.css";
  import "../styles/fireworks.css";

  import AOS from "aos";
  import "aos/dist/aos.css";

  let theme = "dark"; // Default theme

  // Persist theme selection & Initialize AOS
  onMount(() => {
    // Force dark theme for now
    theme = "dark";
    localStorage.setItem("theme", "dark");

    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
    
    // Initialize fireworks
    initFireworks();
  });

  function toggleTheme() {
    theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }
  
  // Function to create dynamic fireworks
  function initFireworks() {
    const container = document.querySelector('.fireworks-container');
    
    // Create canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    
    // Resize canvas to match container
    function resizeCanvas() {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
    
    // Add canvas to container
    container.appendChild(canvas);
    resizeCanvas();
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Firework class
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
      
      // Get random value from range
      randomRange(min, max) {
        return Math.random() * (max - min) + min;
      }
      
      // Get random value from options range
      randomValue(option) {
        return this.randomRange(option.min, option.max);
      }
      
      // Launch firework rockets
      launch(count = 1) {
        for (let i = 0; i < count; i++) {
          // Determine launch position strategy - more evenly distributed
          const launchPosition = this.randomRange(0, 100);
          
          let x, y, vx, vy, explosionHeight;
          
          // Distribute across different areas of the screen - more balanced
          if (launchPosition < 30) {  // Reduced from 50% to 30%
            // Bottom launch
            x = this.randomRange(0.1, 0.9) * this.boundaries.width;
            y = this.boundaries.height;
            vx = this.randomRange(-1.0, 1.0); // Reduced horizontal velocity
            vy = this.randomRange(-7, -5); // Reduced vertical velocity
            // Target heights across entire screen
            explosionHeight = this.randomRange(0.1, 0.8) * this.boundaries.height;
          } else if (launchPosition < 45) { // Increased from 15% to 20%
            // Left side launch
            x = 0;
            y = this.randomRange(0.2, 0.8) * this.boundaries.height;
            vx = this.randomRange(1.5, 3); // Reduced velocity
            vy = this.randomRange(-3, -1.5); // Reduced velocity
            explosionHeight = this.randomRange(0.1, 0.7) * this.boundaries.height;
          } else if (launchPosition < 60) { // Increased from 15% to 20%
            // Right side launch
            x = this.boundaries.width;
            y = this.randomRange(0.2, 0.8) * this.boundaries.height;
            vx = this.randomRange(-3, -1.5); // Reduced velocity
            vy = this.randomRange(-3, -1.5); // Reduced velocity
            explosionHeight = this.randomRange(0.1, 0.7) * this.boundaries.height;
          } else { // Increased from 20% to 40% - much more mid-air bursts
            // Mid-air launch (fireworks that suddenly appear and explode quickly)
            // Spread throughout the screen
            x = this.randomRange(0.1, 0.9) * this.boundaries.width;
            // Use the full height range for random starting positions
            y = this.randomRange(0.1, 0.8) * this.boundaries.height;
            vx = this.randomRange(-0.3, 0.3); // Minimal velocity
            vy = this.randomRange(-0.3, 0.3); // Minimal velocity
            // These should explode close to where they appear
            explosionHeight = y - this.randomRange(5, 20);
          }
          
          // Create new rocket
          const rocket = {
            x,
            y,
            vx,
            vy,
            size: this.randomValue(this.options.lineWidth.trace),
            color: `hsl(${this.randomValue(this.options.hue)}, 100%, 50%)`,
            acceleration: this.options.acceleration,
            friction: this.options.friction,
            // Reduce gravity further for more even distribution
            gravity: this.options.gravity * (launchPosition >= 60 ? 0.05 : 0.4), // Drastically reduced gravity
            flickering: this.randomRange(0, 100) <= this.options.flickering,
            lineWidth: this.randomValue(this.options.lineWidth.trace),
            explosionColorAlpha: 1,
            explosionParticles: this.options.particles + Math.floor(this.randomRange(-10, 20)),
            // Explosion parameters
            explosionChance: launchPosition >= 60 ? 0.05 : 0.01, // Further reduced chance for slower timing
            explosionTimer: launchPosition >= 60 ? this.randomRange(20, 40) : this.randomRange(40, 80), // Longer timer
            targetHeight: explosionHeight,
            // Track whether rocket has reached apex
            hasReachedApex: false,
            initialVY: vy // Store initial velocity for later comparison
          };
          
          this.rockets.push(rocket);
        }
      }
      
      // Update and draw rockets
      updateRockets() {
        this.rockets.forEach((rocket, i) => {
          // Apply physics
          rocket.vx *= rocket.friction;
          rocket.vy *= rocket.friction;
          rocket.vy += rocket.gravity;
          
          rocket.x += rocket.vx;
          rocket.y += rocket.vy;
          
          // Check if rocket has reached apex (vy changed from negative to positive)
          if (!rocket.hasReachedApex && rocket.initialVY < 0 && rocket.vy > -0.5) {
            rocket.hasReachedApex = true;
          }
          
          // Decrement explosion timer
          rocket.explosionTimer--;
          
          // Prioritize explosion parameters that will distribute explosions across the screen
          const shouldExplode = 
            // Outside boundaries check
            (rocket.x < 0 || rocket.x > this.boundaries.width) ||
            // Height-based explosion - when rocket is near its target height
            (rocket.y <= rocket.targetHeight) ||
            // Timer-based explosion
            (rocket.explosionTimer <= 0) ||
            // Random chance explosion that increases after apex
            (rocket.hasReachedApex && Math.random() < rocket.explosionChance);
            
          if (shouldExplode) {
            // Create explosion at rocket's position
            this.createExplosion(
              rocket.x, 
              Math.min(rocket.y, this.boundaries.height * 0.9), // Cap explosion height
              rocket.color, 
              rocket.explosionParticles
            );
            
            // Remove the rocket
            this.rockets.splice(i, 1);
          } else {
            // Draw rocket
            ctx.save();
            ctx.globalAlpha = rocket.flickering ? this.randomRange(0.5, 1) : 1;
            ctx.fillStyle = rocket.color;
            
            // Draw rocket body
            ctx.beginPath();
            ctx.arc(rocket.x, rocket.y, rocket.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw rocket trail
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
      
      // Create explosion particles
      createExplosion(x, y, color, count) {
        // Create flash effect
        ctx.save();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        // Extract hue from color
        const hue = parseInt(color.match(/hsl\((\d+)/)[1]);
        
        // Determine explosion type (variety of patterns)
        const explosionType = Math.floor(this.randomRange(0, 4));
        
        // Create explosion particles
        for (let i = 0; i < count; i++) {
          // Randomize particle properties
          let angle, speed, gravity;
          
          // Different explosion patterns based on type
          switch (explosionType) {
            case 0: // Standard circular
              angle = this.randomRange(0, Math.PI * 2);
              speed = this.randomRange(0.5, 3); // Further reduced speed
              gravity = this.options.gravity * 0.15; // Further reduced gravity
              break;
            case 1: // Chrysanthemum (more structured)
              angle = (i / count) * Math.PI * 2;
              speed = this.randomRange(1, 2.5) + (i % 3) * 0.3; // Further reduced speed
              gravity = this.options.gravity * 0.08; // Further reduced gravity
              break;
            case 2: // Willow (less gravity)
              angle = this.randomRange(0, Math.PI * 2);
              speed = this.randomRange(0.4, 2); // Further reduced speed
              gravity = this.options.gravity * 0.01; // Extremely low gravity for very long hang time
              break;
            case 3: // Palm (mostly upwards)
              angle = this.randomRange(Math.PI * 0.7, Math.PI * 2.3);
              speed = this.randomRange(1, 3); // Further reduced speed
              gravity = this.options.gravity * 0.05; // Further reduced gravity
              break;
          }
          
          const size = this.randomValue(this.options.lineWidth.explosion);
          // Even longer particle life
          const life = this.randomRange(80, 150); // Much longer life
          
          // Randomize color variations
          const hueVariation = this.randomRange(-20, 20);
          const brightness = this.randomValue(this.options.brightness);
          
          // Create particle object
          const particle = {
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size,
            color: `hsl(${hue + hueVariation}, 100%, ${brightness}%)`,
            alpha: 1,
            decay: this.randomValue(this.options.decay) * 0.25, // Drastically slower decay rate
            gravity,
            life,
            maxLife: life
          };
          
          this.particles.push(particle);
        }
      }
      
      // Update and draw particles
      updateParticles() {
        this.particles.forEach((particle, i) => {
          // Apply physics
          particle.vx *= this.options.friction;
          particle.vy *= this.options.friction;
          particle.vy += particle.gravity;
          
          particle.x += particle.vx;
          particle.y += particle.vy;
          
          // Fade out particle more gradually
          // First 70% of life - barely fade
          if (particle.life > particle.maxLife * 0.3) {
            particle.alpha -= particle.decay * 0.5;
          } else {
            // Last 30% of life - fade faster
            particle.alpha -= particle.decay * 1.5;
          }
          
          particle.life--;
          
          // Remove dead particles
          if (particle.alpha <= 0 || particle.life <= 0) {
            this.particles.splice(i, 1);
            return;
          }
          
          // Draw particle
          ctx.save();
          ctx.globalAlpha = particle.alpha;
          ctx.fillStyle = particle.color;
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
        });
      }
      
      // Clear canvas
      clear() {
        // Complete clearing with higher opacity to prevent gray traces
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; // Increased opacity for better clearing
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'lighter';
      }
      
      // Main render loop
      render() {
        if (!this.running) return;
        
        // Clear canvas with fade effect
        this.clear();
        
        // Update and draw elements
        this.updateRockets();
        this.updateParticles();
        
        // Randomly launch new rockets based on intensity
        this.tick++;
        if (this.tick % 18 === 0 && Math.random() * 100 < this.options.intensity) { // Changed from 25 to 18 for more frequent launches
          // Occasionally launch direct mid-air bursts to ensure coverage of upper areas
          if (Math.random() < 0.3) {
            // Create direct mid-air firework without rocket
            const x = this.randomRange(0.1, 0.9) * this.boundaries.width;
            const y = this.randomRange(0.1, 0.6) * this.boundaries.height; // Focus on upper half
            const count = Math.floor(this.randomRange(40, 100));
            const hue = this.randomValue(this.options.hue);
            const color = `hsl(${hue}, 100%, 50%)`;
            
            // Create explosion directly
            this.createExplosion(x, y, color, count);
          } else {
            // Normal launches
            const count = Math.random() < 0.1 ? 2 : 1; // Slightly increased multi-burst probability
            this.launch(count);
          }
        }
        
        // Request next frame
        requestAnimationFrame(() => this.render());
      }
      
      // Start fireworks
      start() {
        this.running = true;
        this.render();
        
        // Initial rockets with moderate delays
        for (let i = 0; i < 3; i++) { // Increased from 2 to 3 initial rockets
          setTimeout(() => {
            this.launch(1);
          }, i * 1500); // Reduced delay between initial rockets from 2000ms to 1500ms
        }
      }
      
      // Stop fireworks
      stop() {
        this.running = false;
      }
    }
    
    // Create and start fireworks
    const fireworks = new Firework({
      intensity: 12,  // Increased from 8 to 12 for more frequent fireworks
      friction: 0.99, // Even higher value = less drag (particles maintain momentum longer)
      gravity: 0.35,   // Reduced gravity for slower movement
      particles: 60,  // Fewer particles for cleaner look
      flickering: 50, // Chance of rocket flickering
      opacity: 0.2,  // Increased opacity for better clearing of trails
      lineWidth: {    // Line width for traces and particles
        explosion: {
          min: 1,
          max: 3
        },
        trace: {
          min: 1,
          max: 3
        }
      },
      hue: {          // Color range
        min: 0,
        max: 360
      },
      rocketsPoint: { // Horizontal start position (percentage)
        min: 20,
        max: 80
      },
      decay: {        // Particle fade speed
        min: 0.0015,  // Slightly faster decay to help with cleanup
        max: 0.004
      },
      brightness: {   // Increased brightness
        min: 60,
        max: 90
      }
    });
    
    fireworks.start();
    
    // Return cleanup function
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