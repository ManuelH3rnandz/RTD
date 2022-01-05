<template>
  <div class="return_notes">
    <ContainerBox>
      <TableRTD :data="allReturnNotes" :columns="columns" />
    </ContainerBox>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ContainerBox from '@/components/ContainerBox.vue'
import TableRTD from '@/components/TableRTD.vue'

export default {
  name: 'ReturnNotes',
  components: {
    ContainerBox,
    TableRTD
  },
  computed: {
    ...mapState({
      allReturnNotes: state => state.returnnotes.allReturnNotes,
      columns: state => state.returnnotes.columns,
    })
  },
  data () {
    return {
    }
  }
}
</script>
