<template>
  <div>
    <div class="">
      <div
        class="mx-auto text-2xl font-medium my-auto px-10 h-full rounded-lg bg-brown-50 max-w-lg mb-4 py-3"
      >
        <div class="mx-auto text-4xl mb-2 font-medium">FIND AND CATCH HER</div>

        <div class="my-auto text-lg">
          BEFORE BEGINNING YOUR JOURNEY, IT'S IMPORTANT TO KNOW WHO YOU ARE
          CHASING. A SCRAP OF UNRAVELED FABRIC ON THE GROUND HAS STRANGE SYMBOLS
          ETCHED INTO THE CLOTH.
        </div>
        <img class="w-56 mx-auto mt-4" src="/fabric.png" />
      </div>
    </div>
    <div class="flex mt-4">
      <PrimaryButton
        v-if="
          guess &&
          answer &&
          String(guess).toLowerCase() === String(answer).toLowerCase()
        "
        class="mx-auto"
        @click.native="$router.push('/questions/3')"
      >
        <div class="text-3xl">You got it! Continue to the next question!</div>
      </PrimaryButton>
      <input
        v-else
        v-model="guess"
        class="mx-auto h-12 text-black px-4 border-brown-50 rounded-lg shadow-lg"
        type="text"
      />
    </div>
    <div class="text-sm text-brown-50 text-center mt-2">
      (Type the correct answer above to unlock the next clue!)
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer: 'test',
      guess: null,
    }
  },
}
</script>

<style></style>
