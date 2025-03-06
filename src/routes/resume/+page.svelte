<script>
  import { fade } from "svelte/transition";
</script>

<main class="max-w-4xl mx-auto px-6 py-16">
  <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-8" in:fade={{ duration: 600 }}>Resume</h1>

  <!-- Download Resume Button -->
  <div class="text-center mb-8" in:fade={{ duration: 600 }}>
    <a href="/Evan-Taylor-Resume.pdf" target="_blank" rel="noopener noreferrer"
      class="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition inline-block">
      📄 View Resume (PDF)
    </a>
  </div>

  <!-- Contact Information -->
  <section class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700" in:fade={{ duration: 600 }}>
    <h2 class="text-xl font-semibold text-gray-800 dark:text-white">Evan Taylor</h2>
    <p class="text-gray-600 dark:text-gray-300">evan@evan-taylor.com ❖ 360.904.2901 ❖ San Luis Obispo, CA</p>
    <p class="text-gray-600 dark:text-gray-300">www.linkedin.com/in/evan-l-taylor</p>
  </section>

  <!-- Education -->
  <section class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700" in:fade={{ duration: 600 }}>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">Education</h2>
    <p class="text-lg font-medium text-gray-800 dark:text-white mt-2">California Polytechnic State University, San Luis Obispo, CA</p>
    <p class="text-gray-600 dark:text-gray-300">Bachelor's of Science in Computer Science (Expected Graduation: June 2027)</p>
    <ul class="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
      <li>Organizations: CS/AI Cal Poly, Cal Poly Security Education Club, Cal Poly Red Cross Club</li>
      <li>Relevant Coursework: Data Structures & Algorithms, Intro to Comp Org, Proj Based OOP, Systems Programming</li>
    </ul>
    
    <p class="text-lg font-medium text-gray-800 dark:text-white mt-4">Hockinson High School</p>
    <p class="text-gray-600 dark:text-gray-300">High School Diploma (September 2020 - June 2024)</p>
    <ul class="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
      <li>Completed 90 credits of Dual Enrollment courses at Clark College</li>
      <li>Specialized in Computer Science courses</li>
    </ul>
  </section>
  
  <!-- Skills -->
  <section class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700" in:fade={{ duration: 600 }}>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">Skills</h2>
    <ul class="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
      <li>Languages: Python, Java, C, Javascript, HTML, CSS</li>
      <li>Technologies: Git, Supabase, Google Developer Dashboard, MongoDB</li>
      <li>Frameworks: Expo, React Native, Next.js, Tailwind CSS</li>
    </ul>
  </section>

  <!-- Selected Independent Projects -->
  <section class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700" in:fade={{ duration: 600 }}>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">Selected Independent Projects</h2>
    
    <div class="mt-4">
      <h3 class="text-lg font-medium text-gray-800 dark:text-white">SwimTrackr <span class="text-gray-500 text-sm">January 2025</span></h3>
      <p class="text-gray-600 dark:text-gray-300 italic">React, TypeScript, Supabase, Tailwind CSS | San Luis Obispo, CA</p>
      <ul class="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
        <li>Developing a full-stack app for swim facilities and parents to track student progress through milestones.</li>
        <li>Implementing Supabase Auth with role-based access for admins, managers, instructors, and parents.</li>
        <li>Built a responsive UI with Tailwind CSS for a seamless multi-device experience.</li>
        <li>Integrating real-time progress updates via Supabase's real-time subscriptions.</li>
        <li>Leveraging Supabase and PostgreSQL for scalable data management.</li>
      </ul>
    </div>

    <div class="mt-4">
      <h3 class="text-lg font-medium text-gray-800 dark:text-white">Auxos <span class="text-gray-500 text-sm">January 2025</span></h3>
      <p class="text-gray-600 dark:text-gray-300 italic">Next.js, TypeScript, Supabase, Tailwind CSS | San Luis Obispo, CA</p>
      <ul class="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
        <li>Developing a gamified productivity app where users join "circles" with friends for mutual accountability.</li>
        <li>Using Supabase to handle authentication and group permissions.</li>
        <li>Designing dynamic dashboards and streak tracking using Next.js Server Actions.</li>
        <li>Focused on intuitive UX and clean design for both web and mobile users.</li>
      </ul>
    </div>
  </section>

  <!-- Work Experience -->
  <section class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700" in:fade={{ duration: 600 }}>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">Work Experience</h2>
    
    <div class="mt-4">
      <h3 class="text-lg font-medium text-gray-800 dark:text-white">Taylored Instruction LLC <span class="text-gray-500 text-sm">June 2023 - Present</span></h3>
      <p class="text-gray-600 dark:text-gray-300 italic">Founder and Lead Instructor, Vancouver, WA</p>
      <ul class="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
        <li>Founded and operate an American Heart Association Training Site and American Red Cross Licensed Training Provider, teaching CPR and first aid to individuals and corporate clients.</li>
        <li>Built and maintain the company website, integrating online registration, payment processing, and automated confirmations.</li>
        <li>Manage class scheduling, student records, and certification processes.</li>
        <li>Developed strong project management, customer service, and communication skills through direct client work and instructor coordination.</li>
      </ul>
    </div>

    <div class="mt-4">
      <h3 class="text-lg font-medium text-gray-800 dark:text-white">Taylored Instruction LLC <span class="text-gray-500 text-sm">January 2022 - Present</span></h3>
      <p class="text-gray-600 dark:text-gray-300 italic">Aquatics Lead and Instructor Trainer, Vancouver, WA</p>
      <ul class="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
        <li>Supervising and training a team of 50+ lifeguards and instructors, ensuring consistent safety standards and high-quality instructional delivery.</li>
        <li>Taught CPR, Lifeguarding, and First Aid certification courses, developing strong public speaking and technical teaching skills.</li>
        <li>Optimized lesson and staff tracking systems to monitor student progress, gaining early experience in data organization and process improvement.</li>
        <li>Collaborated with aquatics leadership to optimize scheduling, training processes, and team communication.</li>
      </ul>
    </div>
  </section>
</main>