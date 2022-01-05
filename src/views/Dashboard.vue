<template>
  <div class="dashboard">
    
    <section class="dashboard_section">
      <div class="section_title_and_more">
        <div class="section_title">
          <span v-html="registeredRequests.icon"></span>
          {{ registeredRequests.name }}
        </div>
        <div class="btn_create_request" @click="newRequest">
          <span>{{ btnRequest }}</span>
          <span class="plus_btn">
            <b-icon icon="plus" type="is-white" size="is-small" />
          </span>
        </div>
      </div>
      <ContainerBox>
        <TableRTD :data="allRequests" :columns="columnsRequest" />
      </ContainerBox>
    </section>

    <section class="dashboard_section">
      <div class="section_title_and_more">
        <div class="section_title">
          <span v-html="returnNotes.icon"></span>
          {{ returnNotes.name }}
        </div>
      </div>
      <ContainerBox>
        <TableRTD :data="allReturnNotes" :columns="columnsReturnNotes" />
      </ContainerBox>
    </section>

    <section class="dashboard_section">
      <div class="section_title_and_more">
        <div class="section_title">
          <span v-html="paymentHistory.icon"></span>
          {{ paymentHistory.name }}
        </div>
      </div>
      <ContainerBox>
        <TableRTD :data="allHistory" :columns="columnsHistory" />
      </ContainerBox>
    </section>

    <div class="go_top_container">
      <div class="go_top" @click="goTop">
        <span>VOLTAR PARA O TOPO</span>
        <span v-html="iconGoTop"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ContainerBox from '@/components/ContainerBox.vue'
import TableRTD from '@/components/TableRTD.vue'

export default {
  name: 'Dashboard',
  components: {
    ContainerBox,
    TableRTD
  },
  computed: {
    ...mapState({
      allRequests: state => state.requests.allRequests,
      columnsRequest: state => state.requests.columns,
      allReturnNotes: state => state.returnnotes.allReturnNotes,
      columnsReturnNotes: state => state.returnnotes.columns,
      allHistory: state => state.paymenthistory.allHistory,
      columnsHistory: state => state.paymenthistory.columns,
    }),
  },
  data () {
    return {
      registeredRequests: {
        name: 'Solicitações cadastradas',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="48" viewBox="0 0 36 48"><g transform="translate(-2)"><path d="M6.11,4A1.5,1.5,0,0,0,4.5,5.345,1.5,1.5,0,0,0,6.11,6.691H25.436a1.5,1.5,0,0,0,1.61-1.345A1.5,1.5,0,0,0,25.436,4ZM4.5,10.727A1.5,1.5,0,0,1,6.11,9.381H25.436a1.5,1.5,0,0,1,1.61,1.345,1.5,1.5,0,0,1-1.61,1.345H6.11A1.5,1.5,0,0,1,4.5,10.727Zm1.61,4.036A1.5,1.5,0,0,0,4.5,16.108a1.5,1.5,0,0,0,1.61,1.345H25.436a1.5,1.5,0,0,0,1.61-1.345,1.5,1.5,0,0,0-1.61-1.345Zm0,5.381A1.5,1.5,0,0,0,4.5,21.489a1.5,1.5,0,0,0,1.61,1.345h9.663a1.5,1.5,0,0,0,1.61-1.345,1.5,1.5,0,0,0-1.61-1.345Z" transform="translate(4.227 8.962)" fill="rgba(135,160,178,0.25)"/><path d="M2,6A6,6,0,0,1,8,0H32a6,6,0,0,1,6,6V42a6,6,0,0,1-6,6H8a6,6,0,0,1-6-6ZM32,3H8A3,3,0,0,0,5,6V42a3,3,0,0,0,3,3H32a3,3,0,0,0,3-3V6A3,3,0,0,0,32,3Z" transform="translate(0 0)" fill="rgba(135,160,178,0.25)"/></g></svg>`
      },
      returnNotes: {
        name: 'Notas devolutivas',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><g transform="translate(-2723 94)"><g transform="translate(2723 -94)"><path d="M3.322,0A3.322,3.322,0,0,0,0,3.322v25.47a2.215,2.215,0,0,0,2.215,2.215V3.322A1.107,1.107,0,0,1,3.322,2.215H31.007A2.215,2.215,0,0,0,28.793,0Z" transform="translate(0)" fill="rgba(127,158,180,0.25)"/><path d="M5.322,2A3.322,3.322,0,0,0,2,5.322V29.685a3.322,3.322,0,0,0,3.322,3.322H18.8a3.322,3.322,0,0,0,2.348-.975L32.035,21.149a3.322,3.322,0,0,0,.972-2.348V5.322A3.322,3.322,0,0,0,29.685,2ZM4.215,5.322A1.107,1.107,0,0,1,5.322,4.215H29.685a1.107,1.107,0,0,1,1.107,1.107V17.5H20.826A3.322,3.322,0,0,0,17.5,20.826v9.967H5.322a1.107,1.107,0,0,1-1.107-1.107Zm15.5,25.012V20.826a1.107,1.107,0,0,1,1.107-1.107h9.508Z" transform="translate(2.993 2.993)" fill="rgba(127,158,180,0.25)"/></g></g></svg>`
      },
      paymentHistory: {
        name: 'Histórico de pagamento',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M9.3,4.151a1.151,1.151,0,1,0-2.3,0V16.816a1.151,1.151,0,0,0,.58,1l8.059,4.605a1.151,1.151,0,0,0,1.142-2L9.3,16.148Z" transform="translate(8.606 3.571)" fill="rgba(127,158,180,0.25)"/><path d="M18,36A18,18,0,1,0,0,18,18,18,0,0,0,18,36ZM33.75,18A15.75,15.75,0,1,1,18,2.25,15.75,15.75,0,0,1,33.75,18Z" fill="rgba(127,158,180,0.25)"/></svg>`
      },
      btnRequest: 'CRIAR SOLICITAÇÃO',
      titleTableRequest: 'Solicitações cadastradas',
      iconGoTop: `<svg xmlns="http://www.w3.org/2000/svg" width="15.751" height="18" viewBox="0 0 15.751 18"><path d="M4,12.375A1.125,1.125,0,0,1,5.125,11.25H18.158l-4.83-4.828A1.126,1.126,0,1,1,14.92,4.829l6.749,6.749a1.125,1.125,0,0,1,0,1.593L14.92,19.921a1.126,1.126,0,1,1-1.593-1.593l4.83-4.828H5.125A1.125,1.125,0,0,1,4,12.375Z" transform="translate(-4.499 22) rotate(-90)" fill="#477ebf" fill-rule="evenodd"/></svg>`
    }
  },
  methods: {
    newRequest () {
      this.$emit("open")
    },
    goTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
.dashboard { }
.dashboard_section { margin-bottom: 60px; }
.section_title_and_more { display: flex; justify-content: space-between; align-items: center; margin-bottom: 23px; }
.section_title { font-family: 'Montserrat', sans-serif; font-size: 2.625rem; font-weight: 600; color: rgba(135, 160, 178, .25); display: flex; align-items: center; }
.section_title span { margin-right: 20px; display: flex; }
.btn_create_request { background: var(--primary_blue); border-radius: 10px; box-shadow: 0px 3px 6px #9DCEFF29; padding: 19px 23px; display: flex; align-items: center; cursor: pointer; }
.btn_create_request span { color: var(--white); }
.plus_btn { width: 26px; height: 26px; display: flex; justify-content: center; align-items: center; background: var(--blue_accent); border-radius: 50%; margin-left: 13px; }
.go_top_container { display: flex; justify-content: flex-end; }
.go_top { display: flex; align-items: center; color: #477EBF; font-size: 1.125rem; margin-bottom: 60px; cursor: pointer; }
.go_top span:last-of-type { display: flex; margin-left: 15px; }
</style>