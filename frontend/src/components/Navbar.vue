<template>
  <header id="navbar" class="bg-white shadow-md sticky top-0 z-50 transition-all duration-300 animate-fade-in">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="relative flex items-center space-x-3 menu-container">
        <button @click="toggleMenu" class="text-gray-600 hover:text-blue-500 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div class="text-2xl font-bold text-gray-800">Farhan Ardiansyah</div>
        <div v-if="menuOpen" class="absolute top-10 left-0 bg-white border rounded shadow-md py-2 px-4 w-40 z-50">
          <a href="#profil" class="block text-gray-700 hover:text-blue-600 py-1">Profil</a>
          <a href="https://github.com/faanns1" target="_blank" class="block text-gray-700 hover:text-blue-600 py-1">GitHub</a>
           <a href="https://www.linkedin.com/in/farhan-ardiansyah-003813301" target="_blank" class="block text-gray-700 hover:text-blue-600 py-1">Linkedln</a>
        </div>
      </div>
      <ul class="flex space-x-6">
        <li><a href="#profil" class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">Profil</a></li>
        <li><a href="#pendidikan" class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">Pendidikan</a></li>
        <li><a href="#skill" class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">Skill</a></li>
        <li><a href="#proyek" class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">Proyek</a></li>
        <li><a href="#kontak" class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300">Kontak</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  mounted() {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("bg-white/70", "backdrop-blur-md", "shadow-none");
      } else {
        navbar.classList.remove("bg-white/70", "backdrop-blur-md", "shadow-none");
      }
    });

   
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".menu-container")) {
        this.menuOpen = false;
      }
    });
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
