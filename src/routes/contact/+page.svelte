<script>
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css"; // Import AOS styles

  import { Mail, MapPin, Github, Linkedin } from "lucide-svelte";

  onMount(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Animates only once per session
      easing: "ease-in-out", // Smooth easing function
    });
  });

  let formSubmitted = false;
</script>

<main class="max-w-4xl mx-auto px-6 py-16 text-center">
  <h1 class="text-4xl font-bold text-gray-800 dark:text-white" data-aos="fade-up">Get In Touch</h1>
  <p class="text-gray-600 dark:text-gray-300 mt-4" data-aos="fade-up" data-aos-delay="200">
    Interested in working together? Let's chat!
  </p>

  <div class="mt-8 space-y-6">
    <!-- Email Button -->
    <a href="mailto:evan@evan-taylor.com"
      class="block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition inline-flex items-center gap-2"
      data-aos="zoom-in">
      <Mail /> Email Me
    </a>

    <!-- Contact Form -->
    <form 
      action="https://formspree.io/f/meoekozv" 
      method="POST"
      class="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4 max-w-lg mx-auto"
      data-aos="fade-up" data-aos-delay="300"
      on:submit={() => formSubmitted = true}
    >
      {#if formSubmitted}
        <p class="text-green-600 dark:text-green-400 font-medium">Thanks! Your message has been sent.</p>
      {:else}
        <label class="block text-left text-gray-800 dark:text-gray-300">
          Name:
          <input type="text" name="name" required class="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white" />
        </label>

        <label class="block text-left text-gray-800 dark:text-gray-300">
          Email:
          <input type="email" name="email" required class="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white" />
        </label>

        <label class="block text-left text-gray-800 dark:text-gray-300">
          Message:
          <textarea name="message" required class="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"></textarea>
        </label>

        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition">
          Send Message
        </button>
      {/if}
    </form>

    <!-- Social Links -->
    <div class="flex flex-wrap justify-center gap-4">
      <a href="https://github.com/evan-taylor" target="_blank" rel="noopener noreferrer"
        class="flex items-center gap-2 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        data-aos="fade-up" data-aos-delay="400">
        <Github class="w-6 h-6 text-gray-800 dark:text-white" />
        <span class="text-gray-800 dark:text-white">GitHub</span>
      </a>
      <a href="https://www.linkedin.com/in/evan-l-taylor/" target="_blank" rel="noopener noreferrer"
        class="flex items-center gap-2 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        data-aos="fade-up" data-aos-delay="500">
        <Linkedin class="w-6 h-6 text-blue-600" />
        <span class="text-gray-800 dark:text-white">LinkedIn</span>
      </a>
    </div>
  </div>
</main>