<script>
  import { Code, Terminal, Database, Sparkles } from "lucide-svelte";
  import { fade } from "svelte/transition";

  const projects = [
    {
      id: "ml-classification",
      title: "Machine Learning Classification",
      description:
        "Built predictive models using Random Forest and SVM for data analytics.",
      tech: ["Python", "scikit-learn", "pandas"],
      icon: Terminal
    },
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a sleek personal portfolio using modern web technologies.",
      tech: ["SvelteKit", "Tailwind CSS", "JavaScript"],
      icon: Code
    },
    {
      id: "database-app",
      title: "Scalable Database Application",
      description:
        "Developed a high-performance database-driven application using PostgreSQL and Node.js.",
      tech: ["PostgreSQL", "Node.js", "Express"],
      icon: Database
    }
  ];
</script>

<main class="max-w-4xl mx-auto px-6 py-16">
  <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-8">Projects</h1>

  <div class="grid gap-8 md:grid-cols-2">
    {#each projects as project}
      <div in:fade={{ duration: 600 }}
        class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
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
</main>