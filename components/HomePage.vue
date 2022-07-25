<template>
  <section id="home" class="pt-48">
    <div class="container lg:flex lg:max-w-full">
      <div class="w-full self-center px-4 lg:w-1/2">
        <h2 class="text-4xl font-serif text-primary">Hello!</h2>
        <p class="text-3xl pt-3 text-primary font-semibold font-mono">
          I'm <strong class="text-3xl text-violet-400">Novantino</strong>
          <span class="block">Donny Wijaya</span>
        </p>
        <h2 class="font-medium text-lg mb-5 text-primary">Fresh Graduate</h2>
        <p class="font-medium mb-5 text-primary leading-relaxed">
          Mudah dan Menyenangkan ya kan ?!
          <span class="font-bold text-lg text-yellow-400">YNTKTS</span>
        </p>
        <a
          href="#"
          class="bg-violet-700 text-base font-mono font-extralight text-white rounded-full px-2 py-4 hover:shadow-lg hover:bg-violet-600 transition duration-300 ease-in-out"
          >Hubungi Saya</a
        >
      </div>
      <div class="self-end px-4">
        <div class="relative mt-10 w-1/2 mx-auto lg:mt-0 lg:right">
          <img src="~/assets/Profile.png" class="relative z-10 mx-auto" />
          <span class="absolute bottom-0 right-10 sm:scale-50 md:scale-100">
            <svg
              width="250"
              height="400"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#fbbf24"
                d="M44.3,24.6C31.2,48.3,-23.7,46.8,-38.1,22.4C-52.4,-2,-26.2,-49.3,1.2,-48.6C28.7,-47.9,57.4,0.9,44.3,24.6Z"
                transform="translate(100 100) scale(2,2)"
              />
            </svg>
            <!-- <svg
              width="250"
              height="400"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#fbbf24"
                d="M56.7,3.5C56.7,25.3,28.3,50.7,5.5,50.7C-17.4,50.7,-34.7,25.3,-34.7,3.5C-34.7,-18.3,-17.4,-36.6,5.5,-36.6C28.3,-36.6,56.7,-18.3,56.7,3.5Z"
                transform="translate(100 100) scale(2,2) "
              />
            </svg> -->
          </span>
          <span class="absolute top-0 left-10 scale-50 md:scale-100">
            <svg
              width="250"
              height="400"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#6d28d9"
                d="M44.3,24.6C31.2,48.3,-23.7,46.8,-38.1,22.4C-52.4,-2,-26.2,-49.3,1.2,-48.6C28.7,-47.9,57.4,0.9,44.3,24.6Z"
                transform="translate(100 100) scale(2,2)"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </section>
  <!-- end of hero section -->
  <!-- about section start -->
  <!-- about section end -->
</template>

<script>
export default {
  setup() {},
}
</script>
