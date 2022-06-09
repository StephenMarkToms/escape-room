<template>
  <div
    ref="layout"
    style="background-image: url('/bg.jpg')"
    class="relative flex flex-col h-screen overflow-hidden bg-orange-100 font-museo-sans bg-center bg-cover"
  >
    <div id="shell" class="xl:py-6 my-auto">
      <div
        style="background-image: url('/board.png')"
        class="bg-center bg-cover bg-no-repeat text-white max-w-4xl mx-auto rounded-lg min-h-56 my-auto p-10 border-4 shadow-lg border-brown-50 bg-brown-50 bg-cover"
      >
        <Nuxt class="transition-opacity duration-200 px-6 md:px-8" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  head() {
    return {
      title: 'UNRAVEL THE MYSTERY',
    }
  },

  mounted() {
    this.$gsap.from('#shell', {
      y: '-200',
      duration: 2,
      opacity: 0,
      delay: 1,
      ease: 'Power3.easeOut',
    })
  },
}
</script>
