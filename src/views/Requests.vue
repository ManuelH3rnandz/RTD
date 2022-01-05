<template>
  <div class="requests">
    <div class="widget_container">
      <BoxWidget :chave="'widgetOrcamentoPendentes'" :title="titleOrcamentoPendentes" :count="countOrcamentoPendentes" color="type_yellow" @beenclicked="widgetClicked" />
      <BoxWidget :chave="'widgetPagamentoPendente'" :title="titlePagamentoPendente" :count="countPagamentoPendente" color="type_orange" @beenclicked="widgetClicked" />
      <BoxWidget :chave="'widgetPagamentoRealizado'" :title="titlePagamentoRealizado" :count="countPagamentoRealizado" color="type_green" @beenclicked="widgetClicked" />
      <BoxWidget :chave="'widgetNotasDevolutivas'" :title="titleNotasDevolutivas" :count="countNotasDevolutivas" color="type_pink" @beenclicked="widgetClicked" />
      <BoxWidget :chave="'widgetCreateRequest'" :title="titleCreateRequest" :is-btn="true" @beenclicked="widgetClicked" />
    </div>
    <ContainerBox>
      <div class="title_table">{{ titleTable }}</div>
      <TableRTD :data="allRequests" :columns="columns" />
    </ContainerBox>
    
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import BoxWidget from '@/components/BoxWidget.vue'
import ContainerBox from '@/components/ContainerBox.vue'
import TableRTD from '@/components/TableRTD.vue'

export default {
  name: 'Requests',
  components: {
    BoxWidget,
    ContainerBox,
    TableRTD,
  },
  computed: {
    ...mapState({
      allRequests: state => state.requests.allRequests,
      columns: state => state.requests.columns,
    }),
    ...mapGetters('requests', {
      countOrcamentoPendentes: 'countOrcamentoPendentes',
      countPagamentoPendente: 'countPagamentoPendente',
      countPagamentoRealizado: 'countPagamentoRealizado',
      countNotasDevolutivas: 'countNotasDevolutivas'
    })
  },
  data () {
    return {
      titleOrcamentoPendentes: 'ORÇAMENTOS PENDENTES',
      titlePagamentoPendente: 'PAGAMENTO PENDENTE',
      titlePagamentoRealizado: 'PAGAMENTO REALIZADO',
      titleNotasDevolutivas: 'NOTAS DEVOLUTIVAS',
      titleCreateRequest: 'CRIAR SOLICITAÇÃO',
      titleTable: 'Solicitações cadastradas',
    }
  },
  methods: {
    widgetClicked (key) {
      console.log('Widget Clicked', key)
      switch (key) {
        case "widgetOrcamentoPendentes":
          // call function here
          break;
        case "widgetPagamentoPendente":
          // call function here
          break;
        case "widgetPagamentoRealizado":
          // call function here
          break;
        case "widgetNotasDevolutivas":
          // call function here
          break;
        case "widgetCreateRequest":
          this.$emit("open")
          break;
      
        default:
          break;
      }
    }
  }
}
</script>

<style scoped>
  .widget_container { display: flex; align-items: center; gap: 0 22px; margin-bottom: 22px; }
</style>
