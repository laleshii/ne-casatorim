export const state = () => ({
  list: []
})

export const mutations = {
  add(state, guest) {
    state.list.push(guest)
  },
  remove(state, guest) {
    state.list.splice(state.list.indexOf(guest), 1)
  },
  clear(state) {
    state.list = []
  },
  setStandardMenu(state, guest) {
    const index = state.list.indexOf(guest)
    state.list[index].menu = 'standard'
  },
  setVeggieMenu(state, guest) {
    const index = state.list.indexOf(guest)
    state.list[index].menu = 'vegetarian'
  },
  updateName(state, { guest, name }) {
    const index = state.list.indexOf(guest)
    state.list[index].name = name
  }
}
