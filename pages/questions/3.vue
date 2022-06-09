<template>
  <div>
    <div class="">
      <div
        class="mx-auto text-2xl font-medium my-auto px-10 h-full rounded-lg bg-brown-50 max-w-lg mb-4 py-3"
      >
        <div class="mx-auto text-4xl mb-2 font-medium">
          SAY MY NAME, SAY MY NAME
        </div>

        <div class="my-auto text-lg">
          YOU WHISPER HER NAME OUT LOUD AND THE ENERGY IN THE ROOM CRACKLES.
          "YOU CAN'T FIND ME IF YOU DON'T WHAT I LOOK LIKE," A VOICE RIPPLES.
          HAS THE WALTERS ALREADY DONE WORK THAT CAN HELP YOU WITH THIS?
        </div>
      </div>
    </div>
    <div class="flex mt-4">
      <PrimaryButton
        class="mx-auto"
        @click.native="$router.push('/questions/4')"
      >
        <div class="text-3xl">Continue</div>
      </PrimaryButton>
    </div>
  </div>
</template>
