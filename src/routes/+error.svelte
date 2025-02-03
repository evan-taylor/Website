<script>
  export let error;
</script>

<main class="flex flex-col items-center justify-center h-screen text-center">
  {#if error.status === 404}
    <h1 class="text-6xl font-bold text-red-500">404</h1>
    <p class="text-2xl text-gray-700 dark:text-gray-300 mt-4">
      Oops! The page you're looking for doesn't exist.
    </p>
    <a href="/" class="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition">
    🔙 Go Home
  </a>
  {:else if error.status === 500}
    <h1 class="text-6xl font-bold text-red-500">500</h1>
    <p class="text-2xl text-gray-700 dark:text-gray-300 mt-4">
      Oops! Something went wrong with the server.
    </p>
    <a href="/" class="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition">
    🔙 Go Home
    </a>
  {:else}
    <h1 class="text-6xl font-bold text-yellow-500">{error.status || "Error"}</h1>
    <p class="text-2xl text-gray-700 dark:text-gray-300 mt-4">
      {error.message || "Something went wrong."}
    </p>
  {/if}
  <a href="/" class="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition">
    🔙 Go Home
  </a>
</main>