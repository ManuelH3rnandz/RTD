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
      <TableRTD :data="data" :columns="columns" />
    </ContainerBox>
    
  </div>
</template>

<script>
// @ is an alias to /src
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
  data () {
    return {
      titleOrcamentoPendentes: 'ORÇAMENTOS PENDENTES',
      countOrcamentoPendentes: 2,
      titlePagamentoPendente: 'PAGAMENTO PENDENTE',
      countPagamentoPendente: 1,
      titlePagamentoRealizado: 'PAGAMENTO REALIZADO',
      countPagamentoRealizado: 2,
      titleNotasDevolutivas: 'NOTAS DEVOLUTIVAS',
      countNotasDevolutivas: 2,
      titleCreateRequest: 'CRIAR SOLICITAÇÃO',
      titleTable: 'Solicitações cadastradas',
      // Table Info
      data: [
        { id: 1, protocol: '2021100817724268', name: 'Pedido de Certidão', date: '2016-10-15 13:43:27', situation: 2, action: null, document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0' },
        { id: 2, protocol: '1028740912736481', name: 'Orçamento', date: '2016-10-15 13:43:27', situation: 1, action: null, document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0' },
        { id: 3, protocol: '234095034985039', name: 'Registro (digitalização)', date: '2016-10-15 13:43:27', situation: 4, action: null, document: null },
        { id: 4, protocol: '203498203947027', name: 'Orçamento', date: '2016-10-15 13:43:27', situation: 3, action: null, document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0' },
        { id: 5, protocol: '069309603948539', name: 'Pedido de Certidão', date: '2016-10-15 13:43:27', situation: 4, action: null, document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0' },
        { id: 6, protocol: '002983645024838', name: 'Registro (digitalização)', date: '2016-10-15 13:43:27', situation: 3, action: null, document: null },
        { id: 7, protocol: '2021100817724268', name: 'Pedido de Certidão', date: '2016-10-15 13:43:27', situation: 2, action: null, document: null },
        { id: 8, protocol: '1028740912736481', name: 'Pedido de Certidão', date: '2016-10-15 13:43:27', situation: 1, action: null, document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0' },
        { id: 3, protocol: '234095034985039', name: 'Registro (digitalização)', date: '2016-10-15 13:43:27', situation: 4, action: null, document: null },
        { id: 4, protocol: '203498203947027', name: 'Orçamento', date: '2016-10-15 13:43:27', situation: 3, action: null, document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0' },
        { id: 5, protocol: '069309603948539', name: 'Pedido de Certidão', date: '2016-10-15 13:43:27', situation: 4, action: null, document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0' },
        { id: 6, protocol: '002983645024838', name: 'Registro (digitalização)', date: '2016-10-15 13:43:27', situation: 3, action: null, document: null },
        { id: 7, protocol: '2021100817724268', name: 'Pedido de Certidão', date: '2016-10-15 13:43:27', situation: 2, action: null, document: null },
        { id: 3, protocol: '234095034985039', name: 'Registro (digitalização)', date: '2016-10-15 13:43:27', situation: 4, action: null, document: null },
        { id: 4, protocol: '203498203947027', name: 'Orçamento', date: '2016-10-15 13:43:27', situation: 3, action: null, document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0' },
        { id: 5, protocol: '069309603948539', name: 'Pedido de Certidão', date: '2016-10-15 13:43:27', situation: 4, action: null, document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0' },
        { id: 6, protocol: '002983645024838', name: 'Registro (digitalização)', date: '2016-10-15 13:43:27', situation: 3, action: null, document: null },
        { id: 7, protocol: '2021100817724268', name: 'Pedido de Certidão', date: '2016-10-15 13:43:27', situation: 2, action: null, document: null },
        { id: 3, protocol: '234095034985039', name: 'Registro (digitalização)', date: '2016-10-15 13:43:27', situation: 4, action: null, document: null },
        { id: 4, protocol: '203498203947027', name: 'Orçamento', date: '2016-10-15 13:43:27', situation: 3, action: null, document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0' },
        { id: 5, protocol: '069309603948539', name: 'Pedido de Certidão', date: '2016-10-15 13:43:27', situation: 4, action: null, document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0' },
        { id: 6, protocol: '002983645024838', name: 'Registro (digitalização)', date: '2016-10-15 13:43:27', situation: 3, action: null, document: null },
        { id: 7, protocol: '2021100817724268', name: 'Pedido de Certidão', date: '2016-10-15 13:43:27', situation: 2, action: null, document: null },
      ],
      columns: [
        {
            field: 'protocol',
            label: 'Protocolo',
            // width: '40',
            // numeric: true
        },
        {
            field: 'name',
            label: 'Nome',
        },
        {
            field: 'date',
            label: 'Data / Hora',
            // centered: true
        },
        {
            field: 'situation',
            label: 'Situação',
        },
        {
            field: 'action',
            label: 'Ação',
        },
        {
            field: 'document',
            label: 'Anexos',
        }
      ]
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
          // call function here
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
