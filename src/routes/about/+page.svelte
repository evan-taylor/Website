<script>
  import { GraduationCap, Briefcase, Heart } from "lucide-svelte";
  import { fade } from "svelte/transition";

  const timeline = [
    {
      title: "Hockinson High School",
      year: "2024",
      icon: GraduationCap,
      color: "blue",
      description:
        "Graduated from Hockinson High School, where I was the captain of the boys varsity swim team and a member of the varsity golf team. I was also actively involved in Future Business Leaders of America."
    },
    {
      title: "Clark College",
      year: "2024",
      icon: Heart,
      color: "purple",
      description:
        "Completed studies at Clark College in Vancouver, WA, focusing on Computer Science. Built a strong foundation in Python, C, HTML/CSS, and JavaScript. All credits transferred to Cal Poly SLO."
    },
    {
      title: "California Polytechnic State University",
      year: "Expected 2028",
      icon: Briefcase,
      color: "green",
      description:
        "Currently pursuing my Bachelor's in Computer Science with a planned concentration in Privacy and Security. Also working towards a minor in Entrepreneurship."
    }
  ];
</script>

<main class="max-w-4xl mx-auto px-6 py-16 space-y-12">
  <section in:fade={{ duration: 600 }}>
    <h1 class="text-4xl font-bold text-gray-800 dark:text-white">About Me</h1>
    <p class="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
      Hi, I’m Evan! I’ve been passionate about computers and programming since middle school.
      My journey has taken me from self-learning coding in 8th grade to founding
      **Taylored Instruction LLC**, an **American Red Cross** and **AHA Training Site** where I teach CPR & Lifeguard courses.
    </p>
  </section>

  <section in:fade={{ duration: 600 }}>
    <h2 class="text-3xl font-bold text-gray-800 dark:text-white">My Journey</h2>
    <div class="space-y-8 mt-6">
      {#each timeline as item}
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <div class="flex items-start gap-4">
            <div class={`bg-${item.color}-100 p-3 rounded-lg`}>
              <item.icon class={`w-6 h-6 text-${item.color}-600`} />
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