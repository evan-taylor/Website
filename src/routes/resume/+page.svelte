<script>
  import { fade } from "svelte/transition";
</script>

<main class="max-w-4xl mx-auto px-6 py-16">
  <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-8" in:fade={{ duration: 600 }}>Resume</h1>

  <!-- Download Resume Button -->
<div class="text-center mb-8" in:fade={{ duration: 600 }}>
  <a href="/static/Evan-Taylor-Resume.pdf" target="_blank"
    class="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition inline-block">
    📄 View Resume (PDF)
  </a>
</div>

  <!-- Contact Information -->
  <section class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700" in:fade={{ duration: 600 }}>
    <h2 class="text-xl font-semibold text-gray-800 dark:text-white">Evan Taylor</h2>
    <p class="text-gray-600 dark:text-gray-300">evan@evan-taylor.com ❖ San Luis Obispo, CA</p>
  </section>

  <!-- Objective -->
  <section class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700" in:fade={{ duration: 600 }}>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">Objective</h2>
    <p class="text-gray-600 dark:text-gray-300 mt-2">
      Motivated Computer Science student at California Polytechnic State University with a strong foundation in software
      development, data structures, and systems design. Eager to leverage experience in Python, Java, and C to contribute
      to innovative projects in technology. Passionate about machine learning and UI/UX design. Seeking to apply strong
      problem-solving skills and collaborative mindset to drive impactful solutions while gaining hands-on industry experience.
    </p>
  </section>

  <!-- Education -->
  <section class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700" in:fade={{ duration: 600 }}>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">Education</h2>
    <p class="text-lg font-medium text-gray-800 dark:text-white mt-2">California Polytechnic State University, San Luis Obispo, CA</p>
    <p class="text-gray-600 dark:text-gray-300">Bachelor’s of Science in Computer Science (Expected Graduation: June 2028)</p>
    <ul class="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
      <li>Currently pursuing courses in programming, algorithms, and software development.</li>
      <li>Interested in pursuing a minor in Entrepreneurship.</li>
    </ul>
  </section>

  <!-- Work Experience -->
  <section class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700" in:fade={{ duration: 600 }}>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">Work Experience</h2>
    
    <div class="mt-4">
      <h3 class="text-lg font-medium text-gray-800 dark:text-white">Taylored Instruction LLC <span class="text-gray-500 text-sm">May 2023 - Present</span></h3>
      <p class="text-gray-600 dark:text-gray-300 italic">Founder, Vancouver, WA</p>
      <ul class="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
        <li>Founded and operate a company providing health and safety training, emphasizing customer service, communication, and organization.</li>
        <li>Partner with local organizations and manage both public and private classes, ensuring a high level of customer satisfaction.</li>
      </ul>
    </div>

    <div class="mt-4">
      <h3 class="text-lg font-medium text-gray-800 dark:text-white">Clark County Family YMCA <span class="text-gray-500 text-sm">Jan 2021 - Sep 2024</span></h3>
      <p class="text-gray-600 dark:text-gray-300 italic">Aquatics Lead, Vancouver, WA</p>
      <ul class="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
        <li>Supervised over 50 lifeguards and swim instructors, ensuring consistent customer service and safety standards.</li>
        <li>Conducted training courses in Lifeguarding and CPR for the public, requiring clear communication and patience.</li>
      </ul>
    </div>

    <div class="mt-4">
      <h3 class="text-lg font-medium text-gray-800 dark:text-white">Royal Oaks Country Club <span class="text-gray-500 text-sm">May 2023 - Sep 2024</span></h3>
      <p class="text-gray-600 dark:text-gray-300 italic">Lead Lifeguard/Lead Swim Instructor, Vancouver, WA</p>
      <ul class="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
        <li>Led a team of 10 lifeguards, managing daily operations including scheduling, safety protocols, and customer interactions.</li>
        <li>Developed and implemented group and private swim lessons, maintaining excellent communication with parents and children to ensure a positive experience.</li>
      </ul>
    </div>
  </section>

  <!-- Skills -->
  <section class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700" in:fade={{ duration: 600 }}>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">Skills</h2>
    <ul class="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
      <li>Strong interpersonal and communication skills developed through teaching and training experiences.</li>
      <li>Proven leadership in team settings, including managing operations and customer service.</li>
      <li>Excellent problem-solving abilities, especially under pressure.</li>
    </ul>
  </section>
</main>