<script>
  import { onMount } from "svelte";
  import { Menu, X } from "lucide-svelte"; // Hamburger & Close Icons

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<nav class="bg-transparent text-[#EFB036] relative">
  <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <!-- Logo -->
    <a href="/" class="text-white text-xl font-bold">Evan Taylor</a>

    <!-- Desktop Menu -->
    <div class="hidden md:flex space-x-6">
      <a href="/" class="text-white hover:text-gray-200 transition text-lg">Home</a>
      <a href="/about" class="text-white hover:text-gray-200 transition text-lg">About</a>
      <a href="/projects" class="text-white hover:text-gray-200 transition text-lg">Projects</a>
      <a href="/resume" class="text-white hover:text-gray-200 transition text-lg">Resume</a>
      <a href="/contact" class="text-white hover:text-gray-200 transition text-lg">Contact</a>
    </div>

    <!-- Mobile Hamburger Icon -->
    <button class="md:hidden text-white" on:click={toggleMenu}>
      {#if isOpen}
        <X class="w-8 h-8" />
      {:else}
        <Menu class="w-8 h-8" />
      {/if}
    </button>
  </div>

  <!-- Mobile Menu (Sliding Dropdown) -->
  {#if isOpen}
    <div class="md:hidden absolute top-full left-0 w-full bg-[#23486A] text-white shadow-md py-4 space-y-4 text-center transition-all">
      <a href="/" class="block hover:text-gray-200 text-lg" on:click={toggleMenu}>Home</a>
      <a href="/about" class="block hover:text-gray-200 text-lg" on:click={toggleMenu}>About</a>
      <a href="/projects" class="block hover:text-gray-200 text-lg" on:click={toggleMenu}>Projects</a>
      <a href="/resume" class="block hover:text-gray-200 text-lg" on:click={toggleMenu}>Resume</a>
      <a href="/contact" class="block hover:text-gray-200 text-lg" on:click={toggleMenu}>Contact</a>
    </div>
  {/if}
</nav>

<style>
  nav {
    transition: all 0.3s ease-in-out;
  }
</style>