<template lang="html">
  <section class="friendslist">
    <div class="loader-container">
        <v-progress-circular indeterminate v-bind:size="50" color="primary" v-if="loader"></v-progress-circular>
    </div>
    <v-flex xs12>
      <v-text-field
        name="input-1-3"
        label="Search alias"
        v-model="filtername"
      ></v-text-field>
    </v-flex>
    <div class="friends-container">
      <div v-for="x in filteredItems">
        <v-expansion-panel> <!-- v-if='x.id != dataId' -->
        <v-expansion-panel-content >
          <v-layout align-center row spacer slot="header">
            <v-flex xs3>
              <v-avatar size="45px" slot="activator">
                <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
              </v-avatar>
            </v-flex>
            <v-flex xs6>
              <strong>{{x.profile.alias}} </strong><br>
              <small>{{x.id}}&nbsp;</small><span>status here</span>
            </v-flex>
            <v-flex
              class="grey--text"
              ellipsis
            >
            </v-flex>
          </v-layout>
          <v-card>
            <v-divider></v-divider>
            <v-card-text class="card-padding">
              <v-tooltip right>
                <v-btn flat icon color="primary" slot="activator" @click="getId(x.id)">
                  <v-icon>chat</v-icon>
                </v-btn>
                <span>Chat with me!</span>
              </v-tooltip>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        </v-expansion-panel>
      </div>
    </div>
  </section>
</template>

<script lang="js">
  import axios from 'axios'
  import SocketMixin from '@/mixins/socket'
  import * as mutations from '../mutations'
  import Vue from 'vue'
  import EventBus from '../event-bus'

  export default {
    name: 'friendslist',
    props: [],
    mounted () {
    },
    data () {
      return {
        a1: null,
        filtername: '',
        items: [],
        loader: false,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'JWT ' + Vue.localStorage.get('token')
        },
        dataId: null
      }
    },
    methods: {
      getter () {
        this.dataId = Vue.localStorage.get('user_id')// diri ang mag send si user ug data
        axios.get(process.env.API_URL + '/info/accounts/', {headers: this.headers})
          .then(response => {
            this.items = response.data.results
            return this.items
          })
          .catch(error => {
            console.log(error)
          })
      },
      getId (id) {
        Vue.localStorage.set('userChatId', id)
        EventBus.$emit('EVENT_NAME')
      }
    },
    created () {
      this.getter()
    },
    computed: {
      filteredItems () {
        var f = this.filtername
        return this.items.filter(function (cust) {
          return cust.profile.alias.toLowerCase().indexOf(f) >= 0
        })
      },
      channel () {
        return `wsregister`
      }
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
  .friendslist {
    .loader-container {
      text-align:center;
    }
    .friends-container {
      margin-top:-20px;
      .card-padding {
        padding:0;
      }
    }
  }
</style>
