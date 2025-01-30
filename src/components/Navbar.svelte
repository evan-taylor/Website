<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let isMenuOpen = false;
  let currentRoute = "";

  // Watch for route changes
  onMount(() => {
    $page.subscribe((p) => {
      currentRoute = p.url.pathname;
    });
  });

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-md">
  <div class="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
    <a href="/" class="text-xl font-bold text-gray-800">Evan Taylor</a>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex space-x-8">
      {#each [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" }
      ] as link}
        <a href={link.path} class="transition-colors duration-200 
          {currentRoute === link.path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}">
          {link.name}
        </a>
      {/each}
    </div>

    <!-- Mobile Navigation -->
    <button class="md:hidden text-gray-600" on:click={toggleMenu}>
      {isMenuOpen ? "✕" : "☰"}
    </button>
  </div>

  {#if isMenuOpen}
    <div class="md:hidden bg-white border-t p-4">
      {#each [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" }
      ] as link}
        <a href={link.path} on:click={() => (isMenuOpen = false)}
           class="block py-2 text-gray-600 hover:text-blue-600">
          {link.name}
        </a>
      {/each}
    </div>
  {/if}
</nav>