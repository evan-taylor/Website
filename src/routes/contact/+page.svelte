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

    <!-- Social Links -->
    <div class="flex flex-wrap justify-center gap-4">
      <a href="https://github.com/evan-taylor" target="_blank" rel="noopener noreferrer"
        class="flex items-center gap-2 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        data-aos="fade-up" data-aos-delay="300">
        <Github class="w-6 h-6 text-gray-800 dark:text-white" />
        <span class="text-gray-800 dark:text-white">GitHub</span>
      </a>
      <a href="https://www.linkedin.com/in/evan-l-taylor/" target="_blank" rel="noopener noreferrer"
        class="flex items-center gap-2 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        data-aos="fade-up" data-aos-delay="400">
        <Linkedin class="w-6 h-6 text-blue-600" />
        <span class="text-gray-800 dark:text-white">LinkedIn</span>
      </a>
    </div>
  </div>
</main>