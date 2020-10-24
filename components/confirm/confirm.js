Component({
  properties: {
    placeholder: {
      type: String,
      value: ""
    },
    visible: {
      type: Boolean,
      value: false
    }
  },
  data: {
    value: ""
  },
  methods: {
    confirm() {
      if (this.data.value) {
        this.triggerEvent('confirm', this.data.value)
      }
    },
    cancel() {
      this.triggerEvent('cancel', '取消')
    },
    watchValue(event) {
      this.data.value = event.detail.value
    }
  }
})