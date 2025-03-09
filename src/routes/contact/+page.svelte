<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { Mail, MapPin, Github, Linkedin, Calendar, Clock, Video, Coffee, MessageSquare } from "lucide-svelte";

  let formSubmitted = false;
  let formError = false;
  let name = "";
  let email = "";
  let message = "";
  
  // Tab functionality for switching between contact methods
  let activeTab = "schedule"; // Default to schedule tab

  onMount(() => {
    // Check for tab parameter in URL
    const tabParam = $page.url.searchParams.get('tab');
    if (tabParam === 'schedule' || tabParam === 'message') {
      activeTab = tabParam;
    }
  });

  async function handleSubmit(event) {
    event.preventDefault();
    formSubmitted = false;
    formError = false;

    try {
      const response = await fetch("https://formspree.io/f/meoekozv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });

      if (response.ok) {
        formSubmitted = true;
        name = "";
        email = "";
        message = "";
      } else {
        throw new Error("Form submission failed.");
      }
    } catch (error) {
      console.error(error);
      formError = true;
    }
  }
</script>

<!-- Page Header -->
<div data-aos="fade-down" class="text-white py-12 md:py-16">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <h1 class="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
    <p class="text-lg text-gray-200 max-w-2xl mx-auto">
      Let's connect! Schedule a meeting or send me a message and I'll get back to you.
    </p>

    <!-- Social Links -->
    <div class="mt-6 flex flex-wrap justify-center gap-4 text-sm">
      <div class="flex items-center gap-2">
        <Mail size={16} />
        <a href="mailto:evan@evan-taylor.com" class="hover:underline text-white">
          evan@evan-taylor.com
        </a>
      </div>
      <a href="https://github.com/evan-taylor" target="_blank" class="hover:underline flex items-center gap-2 text-white">
        <Github size={16} /> GitHub
      </a>
      <a href="https://www.linkedin.com/in/evan-l-taylor/" target="_blank" class="hover:underline flex items-center gap-2 text-white">
        <Linkedin size={16} /> LinkedIn
      </a>
    </div>
  </div>
</div>

<!-- Tabs -->
<div class="max-w-4xl mx-auto px-6 mb-8">
  <div 
    data-aos="fade-up" 
    data-aos-duration="600"
    class="flex justify-center border-b border-gray-700"
  >
    <button 
      class="px-6 py-3 font-medium text-lg border-b-2 transition-all {activeTab === 'schedule' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-300'}"
      on:click={() => activeTab = 'schedule'}
    >
      <div class="flex items-center gap-2">
        <Calendar size={20} />
        <span>Schedule Meeting</span>
      </div>
    </button>
    <button 
      class="px-6 py-3 font-medium text-lg border-b-2 transition-all {activeTab === 'message' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-300'}"
      on:click={() => activeTab = 'message'}
    >
      <div class="flex items-center gap-2">
        <MessageSquare size={20} />
        <span>Send Message</span>
      </div>
    </button>
  </div>
</div>

<!-- Main Content -->
<div class="max-w-5xl mx-auto px-6 py-4">
  
  <!-- Schedule Meeting Tab -->
  {#if activeTab === 'schedule'}
    <div class="space-y-10">
      <!-- Info Cards -->
      <div 
        data-aos="fade-up" 
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="800"
        class="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0"
      >
        <div class="bg-gray-800 rounded-xl p-5 border border-gray-700 flex flex-col items-center text-center">
          <div class="bg-blue-500/20 p-3 rounded-full mb-3">
            <Video class="w-6 h-6 text-blue-400" />
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Virtual Meeting</h3>
          <p class="text-gray-300 text-sm">Connect via Google Meet for a face-to-face conversation.</p>
        </div>
        
        <div class="bg-gray-800 rounded-xl p-5 border border-gray-700 flex flex-col items-center text-center">
          <div class="bg-blue-500/20 p-3 rounded-full mb-3">
            <Clock class="w-6 h-6 text-blue-400" />
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">30-Minute Chat</h3>
          <p class="text-gray-300 text-sm">A focused conversation to discuss your ideas, questions, or potential collaboration.</p>
        </div>
      </div>
      
      <!-- Booking Widget -->
      <div 
        data-aos="zoom-in" 
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="900"
        data-aos-delay="200"
        class="bg-gray-800 rounded-xl border border-gray-700 p-4 md:p-6 shadow-xl opacity-0"
      >
        <!-- Motion embed begin -->
        <iframe src="https://app.usemotion.com/meet/evan-taylor/meet" title="Motion Booking Page" width="100%" height="840px" frameborder="0" class="rounded-lg"></iframe>
        <!-- Motion embed end -->
      </div>
    </div>
  {/if}
  
  <!-- Send Message Tab -->
  {#if activeTab === 'message'}
    <div data-aos="fade-up" data-aos-duration="900" class="opacity-0">
      <!-- Contact Form (Fixed JSON Submission) -->
      <form
        class="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-xl space-y-4"
        on:submit={handleSubmit}
      >
        {#if formSubmitted}
          <div class="text-center py-8">
            <div class="inline-flex items-center justify-center mb-4 bg-green-500/20 p-3 rounded-full">
              <Mail class="w-6 h-6 text-green-400" />
            </div>
            <p class="text-green-400 font-medium text-lg">Thanks! Your message has been sent.</p>
            <p class="text-gray-300 mt-2">I'll get back to you as soon as possible.</p>
          </div>
        {:else}
          {#if formError}
            <p class="text-red-400 font-medium text-center">Something went wrong. Please try again.</p>
          {/if}

          <label class="block text-left text-gray-300">
            Name:
            <input type="text" bind:value={name} required class="w-full mt-1 px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500" />
          </label>

          <label class="block text-left text-gray-300">
            Email:
            <input type="email" bind:value={email} required class="w-full mt-1 px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500" />
          </label>

          <label class="block text-left text-gray-300">
            Message:
            <textarea 
              bind:value={message} 
              required 
              rows="6"
              class="w-full mt-1 px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500"></textarea>
          </label>

          <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition">
            Send Message
          </button>

          <p class="text-gray-400 text-sm mt-4 text-center">
            You can also email me directly at <a href="mailto:evan@evan-taylor.com" class="text-blue-400 hover:underline">evan@evan-taylor.com</a>
          </p>
        {/if}
      </form>
    </div>
  {/if}
</div>