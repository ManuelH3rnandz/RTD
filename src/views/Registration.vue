<template>
  <div class="registration_login">
    <BoxSignUpLogin @formclick="signUp"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BoxSignUpLogin from '@/components/BoxSignUpLogin.vue'

export default {
  name: 'Registration',
  components: {
    BoxSignUpLogin
  },
  data () {
    return {
      name: '',
      cpfCnpj: '',
      password: ''
    }
  },
  methods: {
    signUp (data) {
      console.log(data)
    }
  }
}
</script>

<style>
  
</style>
