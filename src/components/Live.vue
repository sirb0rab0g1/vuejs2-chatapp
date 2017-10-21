<template>
  <v-app id="inspire">
    <v-navigation-drawer
      persistent
      v-model="drawerRight"
      right
      clipped
      enable-resize-watcher
      app
    >
    <v-btn block color="primary" dark @click="Logout()">Logout</v-btn>
    </v-navigation-drawer>
    <v-toolbar
      class="primary"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>My ID {{ getterId }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat icon color="white">
        <v-icon>announcement</v-icon>
      </v-btn>
      <v-btn flat icon color="white" @click.stop="drawerRight = !drawerRight">
        <v-icon>settings</v-icon>
      </v-btn>

    </v-toolbar>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
    >
    <app-friendslist></app-friendslist>
    </v-navigation-drawer>
    <main>
      <v-navigation-drawer
        temporary
        v-model="left"
        fixed
      >
      </div>
      <app-friendslist></app-friendslist>
      </v-navigation-drawer>
      <v-content>
        <v-container style="max-width: 5000px;padding:0;">
          <app-message></app-message>
        </v-container>
      </v-content>

      <v-navigation-drawer
        right
        temporary
        v-model="right"
        fixed
      >
      <v-btn block color="primary" dark @click="Logout()">Logout</v-btn>
      </v-navigation-drawer>
    </main>
  </v-app>
</template>

<script lang="js">
  import Friendslist from '@/components/Friendslist.vue'
  import Message from '@/components/Message.vue'
  import Vue from 'vue'

  export default {
    name: 'live',
    items: [],
    mounted () {

    },
    data () {
      return {
        items: this.items,
        drawer: true,
        drawerRight: true,
        right: null,
        left: null,
        loader: true,
        getterId: null
      }
    },
    methods: {
      Logout () {
        this.$localStorage.remove('user_id')
        this.$localStorage.remove('token')
        this.$localStorage.remove('userChatId')
        this.$router.push('/')
      },
      getId () {
        this.getterId = Vue.localStorage.get('user_id')// diri ang mag send si user ug data
        // console.log(this.getterId + 'id ni ')
        return this.getterId
      }
    },
    created () {
      this.getId()
    },
    props: {
      source: String
    },
    components: {
      appFriendslist: Friendslist,
      appMessage: Message
    }
}
</script>

<style scoped lang="scss">
  .live {
    .loader-container {
      text-align:center;
    }
  }
</style>
