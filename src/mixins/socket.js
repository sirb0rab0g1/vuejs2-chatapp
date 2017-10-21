export default {
  computed: {
    socket: function () {
      return new WebSocket(`${process.env.WS_URL}/${this.channel}`)
    }
  },
  methods: {
    addListeners: function () {
      if (this.$options['socket']) {
        let conf = this.$options.socket
        if (conf.events) {
          Object.keys(conf.events).forEach((key) => {
            let func = conf.events[key].bind(this)
            this.socket[key] = func
            conf.events[key].__binded = func
          })
        }
      }
    }
  },
  mounted: function () {
    this.addListeners()
  }
}
