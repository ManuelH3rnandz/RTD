<template>
  <div class="home">
    <ContainerBox>
      <TableRTD :data="allHistory" :columns="columns" />
    </ContainerBox>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ContainerBox from '@/components/ContainerBox.vue'
import TableRTD from '@/components/TableRTD.vue'

export default {
  name: 'PaymentHistory',
  components: {
    ContainerBox,
    TableRTD
  },
  computed: {
    ...mapState({
      allHistory: state => state.paymenthistory.allHistory,
      columns: state => state.paymenthistory.columns,
    })
  },
  data () {
    return {
      
    }
  }
}
</script>
