<script>
  import { Mail, MapPin, Github, Linkedin } from "lucide-svelte";
  import { fade } from "svelte/transition";
</script>

<main class="max-w-4xl mx-auto px-6 py-16 text-center">
  <h1 in:fade={{ duration: 600 }} class="text-4xl font-bold text-gray-800 dark:text-white">Get In Touch</h1>
  <p in:fade={{ duration: 600 }} class="text-gray-600 dark:text-gray-300 mt-4">
    Interested in working together? Let's chat!
  </p>

  <div class="mt-8 space-y-6">
    <a href="mailto:evan@evan-taylor.com"
      class="block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition inline-flex items-center gap-2">
      <Mail /> Email Me
    </a>

    <div class="flex flex-wrap justify-center gap-4">
      <a href="https://github.com/evan-taylor" target="_blank" rel="noopener noreferrer"
        class="flex items-center gap-2 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        <Github class="w-6 h-6 text-gray-800 dark:text-white" />
        <span class="text-gray-800 dark:text-white">GitHub</span>
      </a>
      <a href="https://www.linkedin.com/in/evan-l-taylor/" target="_blank" rel="noopener noreferrer"
        class="flex items-center gap-2 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        <Linkedin class="w-6 h-6 text-blue-600" />
        <span class="text-gray-800 dark:text-white">LinkedIn</span>
      </a>
    </div>
  </div>
</main>