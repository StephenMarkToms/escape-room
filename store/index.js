export const state = () => ({
  question: 0,
})

export const mutations = {
  setQuestion(state, question) {
    state.question = question
  },
}
