<template>
  <!-- Menu Section -->
  <div id="Menu" class="dark:bg-slate-800 min-h-screen">
    <div class="h-[100px] p-[20px] bg-zinc-900">
      <div class="flex flex-wrap h-full">
        <nav
          class="navbar w-full px-12 flex justify-between items-center h-full"
        >
          <p class="text-primary font-mono text-base">N.D.W</p>
          <div>
            <a
              href="#"
              class="dark:text-white text-white font-mono font-extralight py-3 px-1 m-2 rounded-lg hover:text-violet-700 transition duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              class="dark:text-white text-white font-mono py-3 px-1 m-2 font-extralight rounded-lg hover:text-violet-700 transition duration-300 ease-in-out"
            >
              About
            </a>
            <a
              href="#"
              class="dark:text-white text-white font-mono py-3 px-1 m-2 font-extralight rounded-lg hover:text-violet-700 transition duration-300 ease-in-out"
            >
              Project
            </a>
            <a
              href="#"
              class="dark:text-white text-white font-mono py-3 px-1 m-2 font-extralight rounded-lg hover:text-violet-700 transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </div>
    <div class="component">
      <HomePage />
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
