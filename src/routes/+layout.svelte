<script>
  import { onMount } from "svelte";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import "../styles/global.css";

  import AOS from "aos";
  import "aos/dist/aos.css";

  let theme = "dark"; // Default theme

  // Persist theme selection & Initialize AOS
  onMount(() => {
    theme = localStorage.getItem("theme") || "light";

    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  });

  function toggleTheme() {
    theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }
</script>

<!-- Full-Site Gradient Background -->
<div class="relative min-h-screen">
  <div class="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700"></div>

  <!-- Page Content -->
  <Navbar on:toggleTheme={toggleTheme} />
  
  <main class="relative min-h-screen text-white">
    <slot /> <!-- Dynamic Page Content -->
  </main>

  <Footer />
</div>