<template>
  <!-- Main Section -->
  <div id="Main" class="min-h-screen">
    <header
      class="h-[100px] p-[20px] w-full bg-zinc-900 fixed z-20"
      :class="{
        'opacity-80': isScrolled,
      }"
    >
      <div class="flex flex-wrap h-full">
        <nav
          class="navbar w-full px-12 flex justify-between relative items-center h-full"
        >
          <a href="#Main" class="text-v1o font-mono font-bold text-3xl">
            <span class="text-yell">ND</span>WEB
          </a>
          <div>
            <a
              href="#Main"
              class="text-white font-mono font-extralight py-3 px-1 m-2 rounded-lg hover:text-violet-700 transition duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="#about"
              class="text-white font-mono py-3 px-1 m-2 font-extralight rounded-lg hover:text-violet-700 transition duration-300 ease-in-out"
            >
              About
            </a>
            <a
              href="#project"
              class="text-white font-mono py-3 px-1 m-2 font-extralight rounded-lg hover:text-violet-700 transition duration-300 ease-in-out"
            >
              Project
            </a>
            <a
              href="#about"
              class="text-white font-mono py-3 px-1 m-2 font-extralight rounded-lg hover:text-violet-700 transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
    <div class="component lg:w-full">
      <HomePage />
      <AboutPage />
      <ProjectPage />
    </div>
    <!-- End of Main Section -->
    <footer class="h-[200px] bg-zinc-900 pt-12 pb-12">
      <div class="flex flex-wrap">
        <div class="w-full px-4 mb-12 text-neutral-300 font-medium">
          <h2 class="font-bold text-xl mb-2">Hubungi saya</h2>
          <p>novantinodw@gmial.com</p>
          <p>jl.Daarat Nipah III No.181</p>
          <p>Semarang</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      isScrolled: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScrollHandler)
  },
  methods: {
    onScrollHandler() {
      if (document.documentElement.scrollTop > 0) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
    },
  },
}
</script>

<style scoped></style>

<!-- <button
          id="hamburger"
          name="hamburger"
          type="button"
          class="block absolute right-4"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button> -->
