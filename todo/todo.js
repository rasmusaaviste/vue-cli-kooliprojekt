export default {
  name: 'todo',
  data: function () {
      return {
          newTODO: '',
          TODOs: [],
          done: []
      }
  },
  methods: {
      addTODO () {
          this.TODOs.push(this.newTODO)
          this.newTODO = ''
      },
      markDone (value, index) {
          this.done.push({value, index})
          this.TODOs.splice(index, 1)
      },
      removeFromTODOs (index) {
          this.TODOs.splice(index, 1)
      },
      removeFromDone (index) {
          this.done.splice(index, 1)
      }
  }
}
