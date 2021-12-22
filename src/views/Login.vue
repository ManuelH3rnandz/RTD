<template>
  <div class="registration_login">
    <BoxSignUpLogin is-login @formclick="login"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BoxSignUpLogin from '@/components/BoxSignUpLogin.vue'

export default {
  name: 'Login',
  components: {
    BoxSignUpLogin
  },
  data () {
    return {
      cpfCnpj: '',
      password: ''
    }
  },
  methods: {
    login (data) {
      console.log(data)
    }
  }
}
</script>

<style>
  
</style>
