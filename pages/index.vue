<template>
  <div>
    <Slide>
      <div class="text-center">
        <div
          class="mx-auto text-2xl font-medium text-center my-auto px-10 h-full rounded-lg bg-brown-50 max-w-lg mb-4"
        >
          <div class="mx-auto text-4xl font-medium">UNRAVEL THE MYSTERY</div>
          <div class="mx-auto text-2xl mb-6 font-medium -mt-1 italic">
            by Nina Metz
          </div>
        </div>
      </div>
      <img class="max-w-3xl mx-auto" src="/title.jpg" />
    </Slide>
    <PrimaryButton
      class="mx-auto mt-4"
      @click.native="$router.push('/questions/1')"
    >
      <div class="text-3xl">Begin!</div>
    </PrimaryButton>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      question: (state) => state.question,
    }),
  },

  methods: {},
}
</script>
