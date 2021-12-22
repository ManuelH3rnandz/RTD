<template>
  <div class="home">
    <ContainerBox>
      <TableRTD :data="data" :columns="columns" />
    </ContainerBox>
  </div>
</template>

<script>
import ContainerBox from '@/components/ContainerBox.vue'
import TableRTD from '@/components/TableRTD.vue'

export default {
  name: 'PaymentHistory',
  components: {
    ContainerBox,
    TableRTD
  },
  data () {
    return {
      data: [
        { 
          id: 1,
          bill: '2021100817724268',
          reference: 'Pedido de Certidão',
          date: '2016-10-15 13:43:27',
          value: 120.00,
          status: 2, // 2 = pagamento pendente OR 3 pagamento realizado
          payment: 'codigo pra gerar boleto'
        },
        { 
          id: 1,
          bill: '2021100817724268',
          reference: 'Pedido de Certidão',
          date: '2016-10-15 13:43:27',
          value: 120.00,
          status: 2, // 2 = pagamento pendente OR 3 pagamento realizado
          payment: 'codigo pra gerar boleto'
        },
        { 
          id: 1,
          bill: '2021100817724268',
          reference: 'Pedido de Certidão',
          date: '2016-10-15 13:43:27',
          value: 120.00,
          status: 3, // 2 = pagamento pendente OR 3 pagamento realizado
          payment: 'codigo pra gerar boleto'
        },
        { 
          id: 1,
          bill: '2021100817724268',
          reference: 'Pedido de Certidão',
          date: '2016-10-15 13:43:27',
          value: 120.00,
          status: 2, // 2 = pagamento pendente OR 3 pagamento realizado
          payment: 'codigo pra gerar boleto'
        },
        { 
          id: 1,
          bill: '2021100817724268',
          reference: 'Pedido de Certidão',
          date: '2016-10-15 13:43:27',
          value: 120.00,
          status: 3, // 2 = pagamento pendente OR 3 pagamento realizado
          payment: 'codigo pra gerar boleto'
        },
        { 
          id: 1,
          bill: '2021100817724268',
          reference: 'Pedido de Certidão',
          date: '2016-10-15 13:43:27',
          value: 120.00,
          status: 2, // 2 = pagamento pendente OR 3 pagamento realizado
          payment: 'codigo pra gerar boleto'
        },
        { 
          id: 1,
          bill: '2021100817724268',
          reference: 'Pedido de Certidão',
          date: '2016-10-15 13:43:27',
          value: 120.00,
          status: 3, // 2 = pagamento pendente OR 3 pagamento realizado
          payment: 'codigo pra gerar boleto'
        },
        { 
          id: 1,
          bill: '2021100817724268',
          reference: 'Pedido de Certidão',
          date: '2016-10-15 13:43:27',
          value: 120.00,
          status: 2, // 2 = pagamento pendente OR 3 pagamento realizado
          payment: 'codigo pra gerar boleto'
        },
        { 
          id: 1,
          bill: '2021100817724268',
          reference: 'Pedido de Certidão',
          date: '2016-10-15 13:43:27',
          value: 120.00,
          status: 3, // 2 = pagamento pendente OR 3 pagamento realizado
          payment: 'codigo pra gerar boleto'
        },
        { 
          id: 1,
          bill: '2021100817724268',
          reference: 'Pedido de Certidão',
          date: '2016-10-15 13:43:27',
          value: 120.00,
          status: 2, // 2 = pagamento pendente OR 3 pagamento realizado
          payment: 'codigo pra gerar boleto'
        },
        { 
          id: 1,
          bill: '2021100817724268',
          reference: 'Pedido de Certidão',
          date: '2016-10-15 13:43:27',
          value: 120.00,
          status: 3, // 2 = pagamento pendente OR 3 pagamento realizado
          payment: 'codigo pra gerar boleto'
        },
        { 
          id: 1,
          bill: '2021100817724268',
          reference: 'Pedido de Certidão',
          date: '2016-10-15 13:43:27',
          value: 120.00,
          status: 2, // 2 = pagamento pendente OR 3 pagamento realizado
          payment: 'codigo pra gerar boleto'
        },
        { 
          id: 1,
          bill: '2021100817724268',
          reference: 'Pedido de Certidão',
          date: '2016-10-15 13:43:27',
          value: 120.00,
          status: 3, // 2 = pagamento pendente OR 3 pagamento realizado
          payment: 'codigo pra gerar boleto'
        },
        { 
          id: 1,
          bill: '2021100817724268',
          reference: 'Pedido de Certidão',
          date: '2016-10-15 13:43:27',
          value: 120.00,
          status: 3, // 2 = pagamento pendente OR 3 pagamento realizado
          payment: 'codigo pra gerar boleto'
        },
      ],
      columns: [
        {
            field: 'bill',
            label: 'Fatura'
        },
        {
            field: 'reference',
            label: 'Referência',
        },
        {
            field: 'date',
            label: 'Vencimento',
        },
        {
            field: 'value',
            label: 'Valor',
        },
        {
            field: 'status',
            label: 'Status',
        },
        {
            field: 'payment',
            label: 'Pagamento',
        }
      ]
    }
  }
}
</script>
