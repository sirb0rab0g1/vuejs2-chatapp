<template lang="html">

  <section class="message">
    <v-container>
    <form v-if="receiverId !== null">
      <v-layout row wrap>
        <div id='container' class='msg-container'>
          <div v-for="x in items">
            <div style="text-align:right;" v-if=' x.user_id  == dataId'>
              {{x.msg}}
              <v-avatar size="36px" slot="activator">
                <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
              </v-avatar><br>
              <small>sent by id {{ x.user_id }}</small>
            </div>
            <div style="text-align:left;" v-if=' x.user_id  != dataId'>
              <v-avatar size="36px" slot="activator">
                <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
              </v-avatar>
              {{x.msg}}<br>
              <small>sent by id {{ x.user_id }}</small>
            </div>
          </div>
        </div> 
        <video id="video" ref="video" class="video-container" v-if="showCam">Video stream not available.</video>
        <!-- <canvas id="canvas" ref="canvas" style="border:solid;">
        </canvas>

        <div class="output">
          <img id="photo" ref="photo" alt="The screen capture will appear in this box.">
        </div> -->

        <!-- <button @click="takephoto($event)">Take photo</button> -->
        <v-flex xs12 lg10>

          <v-text-field
            label="Message"
            v-model="chatmessage"
            v-on:keyup.enter="submit"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 lg2>
          <v-btn flat icon color="primary" @click="starstream()">
            <v-icon>videocam</v-icon>
          </v-btn>
          <v-btn color="primary" @click="submit">Send</v-btn>
        </v-flex>
        </v-layout>
      </form>
    </v-container>
  </section>

</template>

<script lang="js">
  import axios from 'axios'
  import * as mutations from '../mutations'
  import SocketMixin from '@/mixins/socket'
  import Vue from 'vue'
  import EventBus from '../event-bus'

  export default {
    name: 'message',
    props: [],
    items: [],

    data () {
      return {
        chatmessage: '',
        items: this.items,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'JWT ' + Vue.localStorage.get('token')
        },
        dataId: null,
        receiverId: null,
        width: 300,
        height: 0,
        photo: null,
        startbutton: null,
        canvas: null,
        video: null,
        showCam: false
      }
    },
    methods: {
      submit () {
        if (this.chatmessage === '') {
          console.log('err')
        } else {
          var body = {user_id: this.dataId, msg: this.chatmessage, receiver_id: this.receiverId}
          axios.post(process.env.API_URL + '/msg/msg/', body, {headers: this.headers})
          .then(response => {
            console.log(response.data)
            this.getter()
          })
          .catch(error => {
            console.log(error)
          })
        }
      },
      getter () {
        if (this.receiverId === null) {
          console.log('no data pa lol')
        } else {
          axios.get(process.env.API_URL + '/msg/messages/' + this.receiverId + '/', {headers: this.headers})
          .then(response => {
            this.items = response.data.results
            console.log(response.data.results)
            this.chatmessage = ''
            // this.loader = false
          })
          .catch(error => {
            console.log(error + 'animal')
          })
        }
      },
      gettId () {
        this.dataId = Vue.localStorage.get('user_id')
        return this.dataId
      },
      getMsg () {
        this.receiverId = Vue.localStorage.get('userChatId')
        this.getter()
        return this.receiverId
      },
      starstream () {
        this.showCam = true
        let constraints = { audio: false, video: true }
        navigator.getMedia = (navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia)

        navigator.mediaDevices.getUserMedia(constraints)
        .then(function (mediaStream) {
          var video = document.querySelector('video')
          video.srcObject = mediaStream
          video.onloadedmetadata = function (e) {
            video.play()
            return this.showCam
          }
        })
      }
      // takephoto (ev) {
      //   console.log(ev)
      //   this.takepicture()
      // },
      // takepicture () {
      //   let context = this.$refs.canvas.getContext('2d')
      //   this.$refs.canvas.width = 300
      //   this.$refs.canvas.height = 300
      //   context.drawImage(this.video, 0, 0, 300, 300)
      //   let data = this.$refs.canvas.toDataURL('image/png')
      //   this.$refs.photo.setAttribute('src', data)
      // }
    },
    mounted () {
      EventBus.$on('EVENT_NAME', this.getMsg)
    },
    created () {
      this.getMsg()
      this.gettId()
      // this.getter()
    },
    computed: {
      channel () {
        return `wsmessaging`
      }
    },
    updated () {
      var container = this.$el.querySelector('#container')
      container.scrollTop = container.clientHeight
    },
    mutations,
    socket: {
      events: {
        onmessage: function (event) {
          return this.getter()
        }
      }
    },
    mixins: [SocketMixin]
}
</script>

<style scoped lang="scss">
  .message {
    .loader-container {
      text-align:center;
    }
    .msg-container {
      height:78vh;width:100%;overflow:auto;
    }
    .video-container {
      width:600px;position:fixed;top:0;right:0;z-index:10000;
    }
  }
</style>
