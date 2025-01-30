<script>
  import { onMount } from "svelte";
</script>

<nav class="bg-transparent">
  <div class="max-w-6xl mx-auto px-6 py-4 flex justify-center space-x-6">
    <a href="/" class="text-white hover:text-gray-200 transition text-lg">Home</a>
    <a href="/about" class="text-white hover:text-gray-200 transition text-lg">About</a>
    <a href="/projects" class="text-white hover:text-gray-200 transition text-lg">Projects</a>
    <a href="/contact" class="text-white hover:text-gray-200 transition text-lg">Contact</a>
  </div>
</nav>

<style>
  nav {
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    nav div {
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
    }

    nav a {
      display: block;
      padding: 10px 0;
    }
  }
</style>