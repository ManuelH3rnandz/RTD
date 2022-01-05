<template>
  <div class="dashboard">
    <div class="menu" :class="{ blur: newRequest }">
      <div class="logo_menu_items">
        <div class="logo">
          <img src="../assets/img/RTD_small.png" alt="">
        </div>
        <div class="menu_items">
          <router-link v-for="(item, index) in menu" :key="item.name" :to="item.to" class="menu_item" :class="{ active: (index == currentActive) }" @click.native="activeMenuItem">
            <span v-html="item.icon"></span>
            {{ item.name }}
          </router-link>
        </div>
      </div>
      <DidYouKnow :msg="youKnow"/>
    </div>
    <TopBar :title-page="$route.name" :class="{ blur: newRequest }" />  
    <div class="content" :class="{ blur: newRequest }">
      <router-view @open="openCreateRequest" />
    </div>
    <CreateRequest v-if="newRequest" @close="closeCreateRequest" />
  </div>
</template>

<script>
import DidYouKnow from '@/components/DidYouKnow.vue'
import TopBar from '@/components/TopBar.vue'
import CreateRequest from '@/components/CreateRequest.vue'

export default {
  name: 'AppLayout',
  components: {
    DidYouKnow,
    TopBar,
    CreateRequest,
  },
  data () {
    return {
      currentActive: 0,
      menu: [
        {
          name: 'Geral',
          to: '/dashboard',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M1,2.714A1.714,1.714,0,0,1,2.714,1H6.143A1.714,1.714,0,0,1,7.857,2.714V6.143A1.714,1.714,0,0,1,6.143,7.857H2.714A1.714,1.714,0,0,1,1,6.143Zm1.714-.571a.571.571,0,0,0-.571.571V6.143a.571.571,0,0,0,.571.571H6.143a.571.571,0,0,0,.571-.571V2.714a.571.571,0,0,0-.571-.571Zm7.429.571A1.714,1.714,0,0,1,11.857,1h3.429A1.714,1.714,0,0,1,17,2.714V6.143a1.714,1.714,0,0,1-1.714,1.714H11.857a1.714,1.714,0,0,1-1.714-1.714Zm1.714-.571a.571.571,0,0,0-.571.571V6.143a.571.571,0,0,0,.571.571h3.429a.571.571,0,0,0,.571-.571V2.714a.571.571,0,0,0-.571-.571ZM1,11.857a1.714,1.714,0,0,1,1.714-1.714H6.143a1.714,1.714,0,0,1,1.714,1.714v3.429A1.714,1.714,0,0,1,6.143,17H2.714A1.714,1.714,0,0,1,1,15.286Zm1.714-.571a.571.571,0,0,0-.571.571v3.429a.571.571,0,0,0,.571.571H6.143a.571.571,0,0,0,.571-.571V11.857a.571.571,0,0,0-.571-.571Zm7.429.571a1.714,1.714,0,0,1,1.714-1.714h3.429A1.714,1.714,0,0,1,17,11.857v3.429A1.714,1.714,0,0,1,15.286,17H11.857a1.714,1.714,0,0,1-1.714-1.714Zm1.714-.571a.571.571,0,0,0-.571.571v3.429a.571.571,0,0,0,.571.571h3.429a.571.571,0,0,0,.571-.571V11.857a.571.571,0,0,0-.571-.571Z" transform="translate(-1 -1)"/></svg>`
        },
        {
          name: 'Solicitações',
          to: '/requests',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="21.333" viewBox="0 0 16 21.333"><defs><style>.a{fill:#9598a7;}</style></defs><g transform="translate(-2)"><path class="a" d="M5.286,4c-.434,0-.786.224-.786.5s.352.5.786.5h9.429c.434,0,.786-.224.786-.5s-.352-.5-.786-.5ZM4.5,6.5c0-.276.352-.5.786-.5h9.429c.434,0,.786.224.786.5s-.352.5-.786.5H5.286C4.852,7,4.5,6.776,4.5,6.5ZM5.286,8c-.434,0-.786.224-.786.5s.352.5.786.5h9.429c.434,0,.786-.224.786-.5s-.352-.5-.786-.5Zm0,2c-.434,0-.786.224-.786.5s.352.5.786.5H10c.434,0,.786-.224.786-.5S10.434,10,10,10Z" transform="translate(0 2.37)"/><path class="a" d="M2,2.667A2.667,2.667,0,0,1,4.667,0H15.333A2.667,2.667,0,0,1,18,2.667v16a2.667,2.667,0,0,1-2.667,2.667H4.667A2.667,2.667,0,0,1,2,18.667ZM15.333,1.333H4.667A1.333,1.333,0,0,0,3.333,2.667v16A1.333,1.333,0,0,0,4.667,20H15.333a1.333,1.333,0,0,0,1.333-1.333v-16A1.333,1.333,0,0,0,15.333,1.333Z"/></g></svg>`
        },
        {
          name: 'Notas devolutivas',
          to: '/return-notes',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><style>.a{fill:#9598a7;}</style></defs><g transform="translate(-2723 94)"><g transform="translate(2723 -94)"><path class="a" d="M1.5,0A1.5,1.5,0,0,0,0,1.5V13a1,1,0,0,0,1,1V1.5A.5.5,0,0,1,1.5,1H14a1,1,0,0,0-1-1Z" transform="translate(0)"/><path class="a" d="M3.5,2A1.5,1.5,0,0,0,2,3.5v11A1.5,1.5,0,0,0,3.5,16H9.586a1.5,1.5,0,0,0,1.06-.44l4.915-4.914A1.5,1.5,0,0,0,16,9.586V3.5A1.5,1.5,0,0,0,14.5,2ZM3,3.5A.5.5,0,0,1,3.5,3h11a.5.5,0,0,1,.5.5V9H10.5A1.5,1.5,0,0,0,9,10.5V15H3.5a.5.5,0,0,1-.5-.5Zm7,11.293V10.5a.5.5,0,0,1,.5-.5h4.293Z" transform="translate(0 0)"/></g></g></svg>`
        },
        {
          name: 'Histórico de pagamento',
          to: '/payment-history',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><style>.a{fill:#9598a7;}</style></defs><path class="a" d="M8,3.5a.5.5,0,0,0-1,0V9a.5.5,0,0,0,.252.434l3.5,2a.5.5,0,0,0,.5-.868L8,8.71Z"/><path class="a" d="M8,16A8,8,0,1,0,0,8,8,8,0,0,0,8,16Zm7-8A7,7,0,1,1,8,1a7,7,0,0,1,7,7Z"/></svg>`
        },
        {
          name: 'Informações',
          to: '/information',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><style>.a{fill:#9598a7;}</style></defs><g transform="translate(-108 -625)"><g transform="translate(-3892 785)"><g transform="translate(4000 -160)"><path class="a" d="M8,15a7,7,0,1,1,7-7,7,7,0,0,1-7,7Zm0,1A8,8,0,1,0,0,8,8,8,0,0,0,8,16Z"/><path class="a" d="M8.93,6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738,3.468c-.194.9.105,1.319.808,1.319A2.071,2.071,0,0,0,8.831,12l.088-.416a1.108,1.108,0,0,1-.686.246c-.275,0-.375-.193-.3-.533ZM9,4.5a1,1,0,1,1-1-1A1,1,0,0,1,9,4.5Z"/></g></g></g></svg>`
        }
      ],
      youKnow: 'Lorem Ipsum is simply dummy text of the print and type industry.',
      newRequest: false
    }
  },
  methods: {
    activeMenuItem () {
      // console.log('clicked')
      // console.log(this.$route.path)
      switch(this.$route.path) {
        case '/dashboard':
          this.currentActive = 0
          break;
        case '/requests':
          this.currentActive = 1
          break;
        case '/return-notes':
          this.currentActive = 2
          break;
        case '/payment-history':
          this.currentActive = 3
          break;
        case '/information':
          this.currentActive = 4
          break;
      }
    },
    openCreateRequest () {
      this.newRequest = true
    },
    closeCreateRequest () {
      this.newRequest = false
    }
  }
}
</script>

<style>
  .dashboard { background: var(--bg); min-height: 100vh; }
  .blur { filter: blur(4px); }
  .menu { position: fixed; top: 0; left: 0; width: 231px; height: 100vh; background: var(--primary_blue); padding-top: 53px; padding-bottom: 40px; display: flex; flex-direction: column; justify-content: space-between; }
  .top_bar { position: fixed; top: 0; right: 0; width: calc(100% - 231px); height: 77px; background: var(--white); box-shadow: 0px 3px 6px #0000000D; }
  .content { padding-left: calc(231px + 22px); padding-top: calc(77px + 29px); padding-right: 35px; }

  .logo_menu_items { }
  .logo { width: 100%; display: flex; justify-content: center; margin-bottom: 50px; }
  .menu_items { }
  .menu_item { width: 100%; height: 50px; display: flex; align-items: center; padding-left: 33px; color: var(--link_menu); font-family: 'Montserrat', sans-serif; font-weight: 400; font-size: 1rem; line-height: 1.1875rem; border-right: solid 7px transparent; transition: all .5s; }
  .menu_item svg { margin-right: 12px; }
  .menu_item svg path { transition: all .5s; }
  .menu_item:hover, .menu_item.active { background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(184,184,184,0.05926120448179273) 60%, rgba(128,128,128,0.17130602240896353) 100%); color: var(--white); border-right: solid 7px var(--blue_accent); }
  .menu_item:hover svg path, .menu_item.active svg path { fill: var(--white); }
</style>
