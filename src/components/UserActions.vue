<template>
  <div class="user_actions">
    <b-dropdown :triggers="['hover']" aria-role="list">
      <template #trigger>
        <b-button
            type="is-ghost"
            class="btn_perfil"
            icon-right="chevron-down">
            <span class="user_image"></span>
            <span class="user_name">{{ userName }}</span>
        </b-button>
      </template>
      <b-dropdown-item aria-role="listitem" @click="goToPerfil">Perfil</b-dropdown-item>
      <hr class="dropdown-divider">
      <b-dropdown-item aria-role="listitem" @click="logOut">Sair</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>

export default {
  name: 'UserActions',
  data () {
    return {
      userName: 'Manuel Hernandez'
    }
  },
  methods: {
    goToPerfil () {
      console.log('Go to Perfil')
    },
    logOut () {
      console.log('LogOut')
    }
  }
}
</script>

<style>
  .user_actions { }
  .btn_perfil { padding-left: 0!important; }
  .btn_perfil:hover, .btn_perfil:hover * { text-decoration: none!important; }
  .btn_perfil > span { display: flex; }
  .user_image { display: block; width: 26px; height: 26px; border-radius: 50%; background-color: #EEF5FD; margin-right: 10px; }
  .user_name { color: #17203E; }
  .dropdown-content { padding: 9px 16px; text-align: center; }
  .dropdown-divider { min-width: 100px; }
  .dropdown-content a.dropdown-item { padding-right: unset; padding-left: unset; color: #4B4B4B91; font-family: 'Montserrat', sans-serif; font-weight: 500; }
</style>
