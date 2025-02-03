<script>
  import Navbar from "../components/Navbar.svelte";  
  import Footer from "../components/Footer.svelte";

  export let error;
</script>

<!-- Animated Gradient Background -->
<div class="relative min-h-screen overflow-hidden">
  <div class="absolute inset-0 -z-10 animate-gradient"></div> <!-- Gradient Layer -->

  <main class="relative min-h-screen flex flex-col justify-center items-center text-center text-white">
    <Navbar />

    {#if error.status === 404}
      <h1 class="text-6xl font-bold text-red-400">404</h1>
      <p class="text-2xl text-gray-300 mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
    {:else if error.status === 500}
      <h1 class="text-6xl font-bold text-red-500">500</h1>
      <p class="text-2xl text-gray-300 mt-4">
        Oops! Something went wrong with the server.
      </p>
    {:else}
      <h1 class="text-6xl font-bold text-yellow-400">{error.status || "Error"}</h1>
      <p class="text-2xl text-gray-300 mt-4">
        {error.message || "Something went wrong."}
      </p>
    {/if}

    <a href="/" class="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition">
      🔙 Go Home
    </a>

    <Footer />
  </main>
</div>