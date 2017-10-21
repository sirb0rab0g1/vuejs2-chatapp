<template lang="html">

  <section class="register">
    <v-container fluid class="main-container">
      <v-layout row wrap justify-center>
        <v-flex xs12 sm8 lg4>
          <v-card>
            <v-toolbar class="primary">
            <router-link to='/' class="router">
              <v-btn icon style="margin-left:-10px;">
                <v-icon class="white--text">arrow_back</v-icon>
              </v-btn>
            </router-link>
            </v-toolbar>
            <v-container fluid>
              <form>
                <v-text-field
                  v-model="username"
                  label="Username"
                  :counter="10"
                  :error-messages="errors.collect('username')"
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
                <v-text-field
                  v-model="repassword"
                  label="Re-password"
                  :counter="10"
                  :error-messages="errors.collect('repassword')"
                  v-validate="'required|max:10'"
                  data-vv-name="repassword"
                  required
                  type="repassword"
                ></v-text-field>
                <v-text-field
                  v-model="alias"
                  label="Alias"
                  :counter="10"
                  :error-messages="errors.collect('alias')"
                  v-validate="'required|max:10'"
                  data-vv-name="alias"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  label="E-mail"
                  :error-messages="errors.collect('email')"
                  v-validate="'required|email'"
                  data-vv-name="email"
                  required
                ></v-text-field>


                
                <div class="text-xs-right">
                  <v-btn primary dark @click="submit">submit</v-btn>
                </div>
              </form>

              <!-- <button @click="getter()">asdhad</button>
              <div v-for="x in items" style="border:solid;">
                <span>{{x.email}}</span>
              </div> -->
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

  Vue.use(VeeValidate)
  
  export default {
    name: 'register',
    props: [],
    items: [],
    $validates: true,
    mounted () {

    },
    data () {
      return {
        username: '',
        email: '',
        e1: false,
        password: '',
        repassword: '',
        alias: '',
        x: 'accounts',
        items: this.items
      }
    },
    methods: {
      submit () {
        if (this.name === '' || this.email === '' || this.password === '' || this.alias === '' || this.repassword === '') {
          this.$validator.validateAll()
        } else {
          var body = {username: this.username, email: this.email, password: this.password, repassword: this.repassword, first_name: 'sample', last_name: 'last_name', profile: {alias: this.alias}}
          axios.post(process.env.API_URL + '/info/signup/', body, {headers: { 'Content-Type': 'application/json' }})
          .then(response => {
            console.log('success')
          })
          .catch(error => {
            console.log(error)
          })
        }
      },
      clear () {
        this.name = ''
        this.email = ''
        this.password = ''
        this.repassword = ''
        this.$validator.clean()
      }
    }

}
</script>

<style scoped lang="scss">
  .register {
    height: 100vh;
    overflow-y: hidden;
    .main-container {
      .router {
         text-decoration:none;
      }
    }
  }
</style>
