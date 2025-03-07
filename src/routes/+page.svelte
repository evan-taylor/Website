<script>
  import { Mail, MapPin, Github, Linkedin, Code, Terminal, Sparkles, Activity, Users } from "lucide-svelte";
  
  let skills = ["JavaScript", "React", "SvelteKit", "Tailwind CSS", "Python", "Machine Learning"];

  const projects = [
    {
      id: "swimtrackr",
      title: "SwimTrackr",
      description: "Developing a user-friendly platform for tracking swimming progress, catering to both parents and facilities.",
      tech: ["React", "Tailwind CSS", "TypeScript", "Supabase"],
      icon: Activity,
      link: "https://www.swimtrackr.app/"
    },
    {
      id: "auxos",
      title: "Auxos",
      description: "Creating a lightly gamified productivity and accountability platform that helps users achieve personal growth through goal tracking and trusted circles.",
      tech: ["Swift", "SwiftUI", "Figma", "Supabase"],
      icon: Users,
      link: "https://www.auxos.app/"
    },
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      description: "Designed and developed a sleek personal portfolio using modern web technologies.",
      tech: ["SvelteKit", "Tailwind CSS", "JavaScript"],
      icon: Code,
      link: "https://evan-taylor.com"
    }
  ];
</script>

<!-- The intro bit -->
<header data-aos="fade-down" class="text-white py-20">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <h1 class="text-6xl font-bold mb-4">Hi! I'm Evan 👋</h1>
    <p class="text-lg text-gray-200 max-w-2xl mx-auto">
      Passionate about software development, UI/UX design, and building meaningful digital experiences.
    </p>

    <!-- Where to find me -->
    <div class="mt-6 flex flex-wrap justify-center gap-4 text-sm">
      <div class="flex items-center gap-2">
        <Mail size={16} />
        <a href="mailto:evan@evan-taylor.com" class="hover:underline">
          evan@evan-taylor.com
        </a>
      </div>
      <div class="flex items-center gap-2">
        <MapPin size={16} />
        <span>San Luis Obispo, CA</span>
      </div>
      <a href="https://github.com/evan-taylor" target="_blank" class="hover:underline flex items-center gap-2">
        <Github size={16} /> GitHub
      </a>
      <a href="https://www.linkedin.com/in/evan-l-taylor/" target="_blank" class="hover:underline flex items-center gap-2">
        <Linkedin size={16} /> LinkedIn
      </a>
    </div>
  </div>
</header>

<!-- Everything else -->
<main class="max-w-4xl mx-auto px-6 py-16 space-y-16">

  <!-- A bit about me -->
  <section 
    data-aos="fade-up" 
    data-aos-anchor-placement="top-bottom" 
    data-aos-offset="300"
    data-aos-mirror="true"
    data-aos-duration="800"
    class="opacity-0"
  >
    <h2 class="text-3xl font-bold text-gray-100">About Me</h2>
    <p class="text-gray-300 leading-relaxed mt-4">
      I'm a Computer Science student at <b>Cal Poly, San Luis Obispo</b>, with a strong background in <b>software development</b> and <b>UI/UX design</b>.
      I love exploring <b>machine learning, web development, and security</b>. Currently, I'm building projects using <b>SvelteKit, React, and Java</b>.
    </p>
  </section>

  <!-- What I'm good at -->
  <section 
    data-aos="zoom-in" 
    data-aos-anchor-placement="top-bottom"
    data-aos-offset="300"
    data-aos-mirror="true"
    data-aos-duration="900"
    class="opacity-0"
  >
    <h2 class="text-3xl font-bold text-gray-100">Skills</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {#each skills as skill, i}
        <div 
          data-aos="zoom-in" 
          data-aos-delay={i * 100} 
          data-aos-anchor-placement="center-bottom"
          data-aos-offset="200"
          data-aos-mirror="true"
          class="flex items-center gap-3 bg-gray-800 p-4 rounded-lg shadow"
        >
          <Sparkles size={20} class="text-blue-400" />
          <span class="text-white">{skill}</span>
        </div>
      {/each}
    </div>
  </section>

  <!-- Cool stuff I've built -->
  <section 
    data-aos="fade-up" 
    data-aos-anchor-placement="top-bottom"
    data-aos-offset="300"
    data-aos-mirror="true" 
    data-aos-duration="800"
    class="opacity-0"
  >
    <h2 class="text-3xl font-bold text-gray-100">Projects</h2>
    <div class="grid gap-8 md:grid-cols-2 mt-6">
      {#each projects as project, index}
        <div 
          data-aos="flip-left" 
          data-aos-delay={index * 150} 
          data-aos-anchor-placement="center-bottom"
          data-aos-offset="200"
          data-aos-mirror="true"
          class="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 flex flex-col h-full {index === 0 ? 'md:col-span-2' : ''}"
        >
          <div class="flex items-center gap-3 mb-4">
            <svelte:component this={project.icon} class="w-8 h-8 text-blue-400" />
            <h3 class="text-xl font-bold text-white">{project.title}</h3>
          </div>
          <p class="text-gray-300 mb-4">{project.description}</p>
          <div class="flex flex-wrap items-center gap-2 mt-auto min-h-[32px]">
            {#each project.tech as tech}
              <span class="inline-flex items-center justify-center px-3 py-1 bg-gray-700 text-blue-300 rounded-full text-sm h-7">{tech}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Let's talk -->
  <section 
    data-aos="fade-up" 
    data-aos-anchor-placement="top-bottom"
    data-aos-offset="300"
    data-aos-mirror="true"
    data-aos-duration="900"
    class="text-center opacity-0"
  >
    <h2 class="text-3xl font-bold text-gray-100">Let's Connect</h2>
    <p class="text-gray-300 mt-4">
      Interested in working together? Feel free to reach out!
    </p>
    <a href="mailto:evan@evan-taylor.com"
      class="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition">
      Contact Me
    </a>
  </section>
</main>