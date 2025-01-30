<script>
  import { Mail, MapPin, Github, Linkedin, Code, Terminal, Sparkles } from "lucide-svelte";
  
  let skills = ["JavaScript", "React", "SvelteKit", "Tailwind CSS", "Python", "Machine Learning"];

  const projects = [
    {
      id: "ml-classification",
      title: "Machine Learning Classification",
      description: "Built predictive models using Random Forest and SVM for data analytics.",
      tech: ["Python", "scikit-learn", "pandas"],
      icon: Terminal
    },
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      description: "Designed and developed a sleek personal portfolio using modern web technologies.",
      tech: ["SvelteKit", "Tailwind CSS", "JavaScript"],
      icon: Code
    }
  ];
</script>

<!-- Hero Section -->
<header data-aos="fade-down" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <h1 class="text-5xl font-bold mb-4">Evan Taylor</h1>
    <p class="text-lg text-gray-200 max-w-2xl mx-auto">
      Passionate about software development, UI/UX design, and building meaningful digital experiences.
    </p>

    <!-- Contact & Social Links -->
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

<!-- Main Content -->
<main class="max-w-4xl mx-auto px-6 py-16 space-y-16">

  <!-- About Me Section -->
  <section data-aos="fade-up" data-aos-delay="100">
    <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">About Me</h2>
    <p class="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
      I'm a Computer Science student at <b>Cal Poly, San Luis Obispo</b>, with a strong background in <b>software development</b> and <b>UI/UX design</b>.
      I love exploring <b>machine learning, web development, and security</b>. Currently, I'm building projects using <b>SvelteKit, React, and Java</b>.
    </p>
  </section>

  <!-- Skills Section -->
  <section data-aos="zoom-in" data-aos-delay="200">
    <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Skills</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {#each skills as skill}
        <div class="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
          <Sparkles size={20} class="text-blue-600" />
          <span class="text-gray-800 dark:text-white">{skill}</span>
        </div>
      {/each}
    </div>
  </section>

  <!-- Projects Section -->
  <section data-aos="fade-up" data-aos-delay="300">
    <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Projects</h2>
    <div class="grid gap-8 md:grid-cols-2 mt-6">
      {#each projects as project}
        <div data-aos="flip-left" data-aos-delay="400"
             class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <div class="flex items-center gap-3 mb-4">
            <project.icon class="w-8 h-8 text-blue-600" />
            <h3 class="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
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
  </section>

  <!-- Contact CTA -->
  <section data-aos="fade-up" data-aos-delay="500" class="text-center">
    <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Let's Connect</h2>
    <p class="text-gray-600 dark:text-gray-300 mt-4">
      Interested in working together? Feel free to reach out!
    </p>
    <a href="mailto:evan@evan-taylor.com"
      class="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition">
      Contact Me
    </a>
  </section>
</main>