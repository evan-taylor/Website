<script>
  import { onMount } from "svelte";
</script>

<nav class="bg-gradient-to-r from-blue-600 to-purple-600 shadow-md transition-all">
  <div class="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
    <a href="/" class="text-xl font-semibold text-white">Evan Taylor</a>
    <div class="flex space-x-6">
      <a href="/" class="text-white hover:text-gray-200 transition">Home</a>
      <a href="/about" class="text-white hover:text-gray-200 transition">About</a>
      <a href="/projects" class="text-white hover:text-gray-200 transition">Projects</a>
      <a href="/contact" class="text-white hover:text-gray-200 transition">Contact</a>
    </div>
  </div>
</nav>

<style>
  nav {
    transition: all 0.3s ease-in-out;
  }
</style>