<template>
  <header id="navbar" class="bg-white shadow-md sticky top-0 z-50 transition-all duration-300 animate-fade-in">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-gray-800">Farhan Ardiansyah</div>
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
  mounted() {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("bg-white/70", "backdrop-blur-md", "shadow-none");
      } else {
        navbar.classList.remove("bg-white/70", "backdrop-blur-md", "shadow-none");
      }
    });
  },
};
</script>