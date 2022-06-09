<template>
  <div
    ref="layout"
    style="background-image: url('/bg.jpg')"
    class="relative flex flex-col h-screen overflow-hidden bg-orange-100 font-museo-sans border-2 ring-orange-300 bg-center bg-cover"
  >
    <div id="shell" class="xl:py-6 my-auto">
      <div
        style="background-image: url('/paper.jpg')"
        class="text-white max-w-4xl mx-auto py-5 xl:shadow-md border-4 p-2 rounded-lg border-orange-900 min-h-56 my-auto"
      >
        <Nuxt class="transition-opacity duration-200 px-6 md:px-8" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  watch: {
    $route() {
      // automatically make the page rest at the top after navigation
      this.$refs.content.scrollTop = 0
    },
  },
  mounted() {
    this.$gsap.from('#shell', {
      x: '-200',
      duration: 2,
      opacity: 0,
      delay: 1,
      ease: 'Power3.easeOut',
    })
  },
}
</script>
