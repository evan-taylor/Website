<script>
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css"; // Import AOS styles

  import { Code, Activity, Users } from "lucide-svelte";

  const projects = [
    {
      id: "swimtrackr",
      title: "SwimTrackr",
      description:
        "Developing a user-friendly platform for tracking swimming progress, catering to both parents and facilities.",
      tech: ["React", "Tailwind CSS", "TypeScript", "Supabase"],
      icon: Activity,
      link: "https://www.swimtrackr.app/"
    },
    {
      id: "auxos",
      title: "Auxos",
      description:
        "Creating a lightly gamified productivity and accountability platform that helps users achieve personal growth through goal tracking and trusted circles.",
      tech: ["Swift", "SwiftUI", "Figma", "Supabase"],
      icon: Users,
      link: "https://www.auxos.app/"
    },
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a sleek personal portfolio using modern web technologies.",
      tech: ["SvelteKit", "Tailwind CSS", "JavaScript"],
      icon: Code,
      link: "https://evan-taylor.com"
    }
  ];

  onMount(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Animates only once per session
      easing: "ease-in-out", // Smooth easing function
    });
  });
</script>

<main class="max-w-4xl mx-auto px-6 py-16">
  <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-8" data-aos="fade-up">Projects</h1>

  <div class="grid gap-8 md:grid-cols-2">
    {#each projects as project, index}
      <div 
        class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
        data-aos="fade-up"
        data-aos-delay={index * 200}
      >
        <div class="flex items-center gap-3 mb-4">
          <svelte:component this={project.icon} class="w-8 h-8 text-blue-600" />
          <h3 class="text-xl font-bold text-gray-800 dark:text-white">
            <a href={project.link} target="_blank" class="hover:underline">{project.title}</a>
          </h3>
        </div>
        <p class="text-gray-600 dark:text-gray-300">{project.description}</p>
        <div class="flex flex-wrap gap-2 mt-4">
          {#each project.tech as tech}
            <span class="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-white rounded-full text-sm">{tech}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</main>