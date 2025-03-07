<script>
  import { onMount } from "svelte";
  import { Menu, X } from "lucide-svelte"; // Grab the menu icons
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<nav class="bg-transparent text-[#EFB036] relative z-50">
  <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <!-- My name up top -->
    <a href="/" class="text-white text-xl font-bold">Evan Taylor</a>

    <!-- Links for big screens -->
    <div class="hidden md:flex space-x-6">
      <a href="/" class="text-white hover:text-gray-200 transition text-lg">Home</a>
      <a href="/projects" class="text-white hover:text-gray-200 transition text-lg">Projects</a>
      <a href="/resume" class="text-white hover:text-gray-200 transition text-lg">Resume</a>
      <a href="/contact" class="text-white hover:text-gray-200 transition text-lg">Contact</a>
    </div>

    <!-- Hamburger for mobile -->
    <button class="md:hidden text-white" on:click={toggleMenu}>
      {#if isOpen}
        <X class="w-8 h-8 transition-transform duration-300 transform rotate-180" />
      {:else}
        <Menu class="w-8 h-8 transition-transform duration-300 transform rotate-0" />
      {/if}
    </button>
  </div>

  <!-- The slide-in menu for small screens -->
  <div
    class="fixed inset-0 bg-[#23486A] text-white flex flex-col items-center justify-center space-y-6 text-lg 
               transition-all duration-300 ease-in-out transform {isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}"
  >
    <button class="absolute top-5 right-6 bg-[#23486A] p-2 rounded-full" on:click={toggleMenu}>
      <X class="w-10 h-10 text-white transition-transform duration-300 transform rotate-180" />
    </button>
    <a href="/" class="hover:text-gray-200 transition" on:click={toggleMenu}>Home</a>
    <a href="/projects" class="hover:text-gray-200 transition" on:click={toggleMenu}>Projects</a>
    <a href="/resume" class="hover:text-gray-200 transition" on:click={toggleMenu}>Resume</a>
    <a href="/contact" class="hover:text-gray-200 transition" on:click={toggleMenu}>Contact</a>
  </div>
</nav>