<script>
  import { onMount } from "svelte";
  import Navbar from "../components/Navbar.svelte"; // Your navigation bar
  import Footer from "../components/Footer.svelte"; // Your footer
  import "../styles/global.css";

  import AOS from "aos";
  import "aos/dist/aos.css";

  let theme = "dark"; // Default theme

  // Persist theme selection & Initialize AOS
  onMount(() => {
    theme = localStorage.getItem("theme") || "light";

    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Smooth easing
      once: true, // Only animate once per scroll
    });
  });

  function toggleTheme() {
    theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }
</script>

<!-- Global Layout Wrapper -->
<div class="{theme}">
  <Navbar on:toggleTheme={toggleTheme} />
  
  <main class="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
    <slot /> <!-- Page Content gets inserted here -->
  </main>
  
  <Footer />
</div>

<style>
  /* Global Styles */
  html, body {
    margin: 0;
    padding: 0;
  }
</style>