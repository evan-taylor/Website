<script>
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css"; // Import AOS CSS

  import { GraduationCap, Briefcase, Heart } from "lucide-svelte";
  import { fade } from "svelte/transition";

  onMount(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Animations happen only once
      easing: "ease-in-out", // Smooth easing
    });
  });

  const timeline = [
    {
      title: "Hockinson High School",
      year: "2024",
      icon: GraduationCap, // Component reference
      color: "blue",
      description:
        "Graduated from Hockinson High School, where I was the captain of the boys varsity swim team and a member of the varsity golf team. I was also actively involved in Future Business Leaders of America."
    },
    {
      title: "Clark College",
      year: "2024",
      icon: Heart, // Component reference
      color: "purple",
      description:
        "Completed studies at Clark College in Vancouver, WA, focusing on Computer Science. Built a strong foundation in Python, C, HTML/CSS, and JavaScript. All credits transferred to Cal Poly SLO."
    },
    {
      title: "California Polytechnic State University",
      year: "Expected 2028",
      icon: Briefcase, // Component reference
      color: "green",
      description:
        "Currently pursuing my Bachelor's in Computer Science with a planned concentration in Privacy and Security. Also working towards a minor in Entrepreneurship."
    }
  ];
</script>

<main class="max-w-4xl mx-auto px-6 py-16 space-y-12">
  <!-- About Section -->
  <section in:fade={{ duration: 600 }} data-aos="fade-up">
    <h1 class="text-4xl font-bold text-gray-800 dark:text-white">About Me</h1>
    <p class="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
      Hi, I’m Evan! I’ve been passionate about computers and programming since middle school.
      My journey has taken me from self-learning coding in 8th grade to founding
      <strong>Taylored Instruction LLC</strong>, an <strong>American Red Cross</strong> and <strong>AHA Training Site</strong> where I teach CPR & Lifeguard courses.
    </p>
  </section>

  <!-- Journey Timeline -->
  <section in:fade={{ duration: 600 }} data-aos="fade-up">
    <h2 class="text-3xl font-bold text-gray-800 dark:text-white">My Journey</h2>
    <div class="space-y-8 mt-6">
      {#each timeline as item}
        <div 
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
          data-aos="fade-up"
        >
          <div class="flex items-start gap-4">
            <!-- Dynamic Component for Icons -->
            <div class={`bg-${item.color}-100 p-3 rounded-lg`}>
              <svelte:component this={item.icon} class={`w-6 h-6 text-${item.color}-600`} />
            </div>
            <div>
              <div class="flex justify-between items-center mb-2">
                <h3 class="text-xl font-bold text-gray-800 dark:text-white">{item.title}</h3>
                <span class={`text-${item.color}-600 font-medium`}>{item.year}</span>
              </div>
              <p class="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>