<template>
  <div class="box_signup_login">
    <img src="../assets/img/RTD.png" alt="Logo RTD">
    <b-field v-if="!isLogin">
      <b-input v-model="name" custom-class="s_l_input" placeholder="Nome"></b-input>
    </b-field>
    <b-field>
      <b-input v-model="cpfCnpj" custom-class="s_l_input" placeholder="CPF/CNPJ"></b-input>
    </b-field>
    <b-field>
      <b-input type="password"
          v-model="password"
          password-reveal
          custom-class="s_l_input"
          placeholder="Senha">
      </b-input>
    </b-field>
    <b-button v-if="isLogin" type="is-primary" expanded class="btn_signup_login" @click="login">Entrar</b-button>
    <b-button v-else type="is-primary" expanded class="btn_signup_login" @click="signUp">Cadastrar</b-button>
    <b-button v-if="isLogin" type="is-ghost" class="btn_link" @click="passwordLost">Esqueceu sua senha?</b-button>
    <b-button v-else tag="router-link"
        to="/login"
        type="is-ghost"
        class="btn_link">
        Já tenho cadastro
    </b-button>
    <template v-if="isLogin">
      <div class="signup_login_divider"></div>
      <div class="btn_link">Não tenho cadastro.</div>
      <b-button tag="router-link"
        to="/registration"
        type="is-ghost"
        class="btn_link is_underline">
        Criar uma conta!
    </b-button>
    </template>
  </div>
</template>

<script>

export default {
  name: 'BoxSignUpLogin',
  props: {
    isLogin: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      name: '',
      cpfCnpj: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      if (this.name != "" && this.cpfCnpj != "" && this.password != "") {
        console.log(this.name, this.cpfCnpj, this.password)
        this.$emit('formclick', { name: this.name, cpfCnpj: this.cpfCnpj, password: this.password })
      } else {
        this.emptyFields()
      }
    },
    login () {
      if (this.cpfCnpj != "" && this.password != "") {
        console.log(this.cpfCnpj, this.password)
        this.$emit('formclick', { cpfCnpj: this.cpfCnpj, password: this.password })
      } else {
        this.emptyFields()
      }
    },
    passwordLost () {
      console.log('Senha Perdida')
    },
    emptyFields () {
      this.$buefy.notification.open({
          duration: 5000,
          message: `Erro<br>Campos vazios`,
          type: 'is-danger',
          hasIcon: true
      })
    }
  }
}
</script>

<style>
  .signup_login_divider { width: 100%; height: 0; border-top: 1px solid var(--white); margin: 21px 0; }
</style>
