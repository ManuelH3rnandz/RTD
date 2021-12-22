<template>
  <div class="top_bar">
    <div class="top_bar_left">
      <div class="top_bar_title">{{ titlePage }}</div>
    </div>
    <div class="top_bar_right">
      <b-field>
        <b-input v-model="search" type="search" icon="magnify" custom-class="search_input" placeholder="O que você está procurando?"></b-input>
      </b-field>
      <Notifications />
      <UserActions />
    </div>
  </div>
</template>

<script>
import Notifications from '@/components/Notifications.vue'
import UserActions from '@/components/UserActions.vue'

export default {
  name: 'TopBar',
  components: {
    Notifications,
    UserActions
  },
  props: {
    titlePage: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style>
  .top_bar { position: fixed; z-index: 5000; top: 0; right: 0; width: calc(100% - 231px); height: 77px; background: var(--white); box-shadow: 0px 3px 6px #0000000D; display: flex; justify-content: space-between; align-items: center; padding-left: 22px; padding-right: 35px; }
  .top_bar_left { }
  .top_bar_right { display: flex; align-items: center; justify-content: flex-end; }
  .top_bar_right .field { margin-bottom: 0!important; }
  .top_bar_title { font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 1rem; line-height: 2.8125rem; color: #4E5367; }
  .search_input { font-family: 'Montserrat', sans-serif; font-weight: 300; font-size: 0.875rem!important; line-height: 1.125rem!important; min-width: 265px; color: #87A0B2!important; background: #EEF5FD!important; border-radius: 7px!important; height: 37px!important; border: none!important; box-shadow: none!important; }
  .search_input + .icon.is-left i { color: #87A0B2!important; }
</style>
