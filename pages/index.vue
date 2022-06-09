<template>
  <div>
    <Slide>
      <div class="text-center">
        <div class="mx-auto text-4xl mb-4 font-medium">UNRAVEL THE MYSTERY</div>
      </div>
      <img class="max-w-3xl mx-auto" src="/title.jpg" />
      <div class="text-center">
        <div class="mx-auto text-2xl mb-4 font-medium mt-3 italic">
          by Nina Metz
        </div>
      </div>
    </Slide>
    <PrimaryButton
      class="mx-auto"
      @click.native="$store.commit('setQuestion', 2)"
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
