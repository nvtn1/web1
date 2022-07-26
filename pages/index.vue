<template>
  <!-- Menu Section -->
  <div id="Menu" class="min-h-screen">
    <header class="h-[100px] p-[20px] bg-zinc-900">
      <div class="flex flex-wrap h-full">
        <nav
          class="navbar w-full px-12 flex justify-between relative items-center h-full"
        >
          <a href="#Menu" class="text-v1o font-mono font-bold text-3xl">
            <span class="text-yell">ND</span>WEB
          </a>
          <div>
            <a
              href="#Menu"
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
              href="#"
              class="text-white font-mono py-3 px-1 m-2 font-extralight rounded-lg hover:text-violet-700 transition duration-300 ease-in-out"
            >
              Project
            </a>
            <a
              href="#"
              class="text-white font-mono py-3 px-1 m-2 font-extralight rounded-lg hover:text-violet-700 transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
    <div class="component lg:w-[1220px]">
      <HomePage />
      <AboutPage />
    </div>
  </div>
  <!-- End of Menu Section -->
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped></style>

// opacity:10 scroll:opacity-100

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
