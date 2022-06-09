<template>
  <div>
    <div class="">
      <div
        class="mx-auto text-2xl font-medium my-auto px-10 h-full rounded-lg bg-brown-50 max-w-lg mb-4 py-3"
      >
        <div class="mx-auto text-4xl font-medium">MISSION</div>
        <div class="my-auto text-lg">
          SOLVE THE ESCAPE ROOM, CATCH THE MUMMY, AND PUT HER BACK WHERE SHE
          BELONGS. HURRY!
        </div>
      </div>
      <img class="w-96 mx-auto" src="/tv.png" />
    </div>
    <div>
      <PrimaryButton
        class="mx-auto"
        @click.native="$router.push('/questions/2')"
      >
        <div class="text-3xl">This sounds like a challenge for me!</div>
      </PrimaryButton>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
