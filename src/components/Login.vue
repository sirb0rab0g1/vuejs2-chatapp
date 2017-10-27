<template lang="html">

  <section class="login">
    <v-container fluid class="main-container">
      <v-layout row wrap justify-center>
        <v-flex xs12 sm8 lg4>
          <v-toolbar class="primary">
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon color="white">more_vert</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card>
            <v-container fluid>
              <form>
                <v-text-field
                  v-model="username"
                  label="Email"
                  :counter="10"
                  :error-messages="errors.collect('Email')"
                  v-validate="'required|max:10'"
                  data-vv-name="username"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  :counter="10"
                  :error-messages="errors.collect('password')"
                  v-validate="'required|max:10'"
                  data-vv-name="password"
                  required
                  type="password"
                ></v-text-field>
                <div class="text-xs-right">
                  <router-link to='/Register'>
                    <a style="float:left;margin-top:15px;">Register</a>
                  </router-link>
                  <v-btn primary dark @click="login">Login</v-btn>
                </div>
              </form>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>

</template>

<script lang="js">
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'
  import axios from 'axios'
  import VueLocalStorage from 'vue-localstorage'
  import router from '@/router/index'
  Vue.use(VueLocalStorage)
  Vue.use(VeeValidate)
  export default {
    name: 'login',
    props: [],
    $validates: true,
    mounted () {

    },
    data () {
      return {
        username: '',
        email: '',
        checkbox: null,
        e1: false,
        password: '',
        alias: '',
        dialog: false
      }
    },
    methods: {
      login () {
        this.$validator.validateAll()
        var body = {username: this.username, password: this.password}
        axios.post(process.env.API_URL + '/info/api-token-auth/', body, {headers: { 'Content-Type': 'application/json' }})
          .then(response => {
            Vue.localStorage.set('token', response.data.token)
            Vue.localStorage.set('user_id', response.data.user.id)
            router.push('/Live')
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .login {
    height:100vh;
    overflow-y:hidden;
    .main-container {
    }
  }
</style>
