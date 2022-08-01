<template>
  <!-- hero section start -->
  <section id="home" class="pt-48 mb-5">
    <div class="lg:flex lg:max-w-full">
      <div class="w-full self-center px-4 lg:w-1/2">
        <h2 class="text-4xl font-serif text-primary">Hello!</h2>
        <p class="text-3xl pt-3 text-primary font-semibold font-mono">
          I'm <strong class="text-3xl text-violet-400">Novantino</strong>
          <span class="block">Donny Wijaya</span>
        </p>
        <h2 class="font-medium text-lg mb-3 text-primary">Fresh Graduate</h2>
        <p class="font-medium mb-5 text-primary leading-relaxed">
          Mudah dan Menyenangkan ya kan ?!
          <span class="font-bold text-lg text-yell">YNTKTS</span>
        </p>
        <a
          href="#about"
          class="bg-violet-700 font-medium text-white rounded-full px-2 py-4 hover:shadow-lg hover:bg-violet-600 transition duration-300 ease-in-out"
          >Contact Me</a
        >
      </div>
      <div class="self-end px-4 pl-12">
        <div class="relative mt-10 w-1/2 mx-auto lg:mt-0 lg:right">
          <img src="~/assets/Profile.png" class="z-10 relative mx-auto" />
          <span class="absolute bottom-0 right-10 sm:scale-50 md:scale-100">
            <svg
              width="250"
              height="400"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#fbbf24"
                d="M69.4,-39.3C82.7,-17,81.3,14.6,67.3,37.4C53.3,60.2,26.6,74.3,0,74.3C-26.7,74.4,-53.4,60.3,-66.8,37.9C-80.1,15.5,-80,-15.4,-66.7,-37.7C-53.3,-60,-26.7,-73.8,0.7,-74.2C28,-74.6,56.1,-61.6,69.4,-39.3Z"
                transform="translate(100 100) scale(1,1)"
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
                d="M69.4,-39.3C82.7,-17,81.3,14.6,67.3,37.4C53.3,60.2,26.6,74.3,0,74.3C-26.7,74.4,-53.4,60.3,-66.8,37.9C-80.1,15.5,-80,-15.4,-66.7,-37.7C-53.3,-60,-26.7,-73.8,0.7,-74.2C28,-74.6,56.1,-61.6,69.4,-39.3Z"
                transform="translate(100 100) scale(1,1)"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </section>
  <!-- end of hero section -->
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
