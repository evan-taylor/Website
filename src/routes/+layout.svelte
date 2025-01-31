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

<svelte:head>
  <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
</svelte:head>

<!-- Full-Site Dynamic Gradient Background -->
<div class="{theme} relative min-h-screen overflow-hidden">
  <div class="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-[#EFB036] via-[#3B6790] to-[#23486A]"></div>

  <!-- Navbar -->
  <Navbar on:toggleTheme={toggleTheme} />
  
  <!-- Main Content -->
  <main class="relative min-h-screen text-white">
    <slot /> <!-- Page Content Gets Inserted Here -->
  </main>

  <!-- Footer -->
  <Footer />
</div>

<style>
  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradientAnimation 20s ease infinite;
  }
</style>