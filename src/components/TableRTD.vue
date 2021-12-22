<template>
  <b-table
    :data="data"
    :paginated="isPaginated"
    :per-page="perPage"
    :current-page.sync="currentPage"
    :pagination-simple="isPaginationSimple"
    :pagination-position="paginationPosition"
    :default-sort-direction="defaultSortDirection"
    :pagination-rounded="isPaginationRounded"
    :hoverable="isHoverable"
    :loading="isLoading"
    :sort-icon="sortIcon"
    :sort-icon-size="sortIconSize"
    aria-next-label="Next page"
    aria-previous-label="Previous page"
    aria-page-label="Page"
    aria-current-label="Current page">

    <template v-for="(column, index) in columns">
      <b-table-column :field="column.field" :label="column.label" sortable numeric v-slot="props" :key="index">

        <template v-if="column.label == 'Protocolo' || column.label == 'Fatura'">
          <router-link v-if="column.label == 'Protocolo'" :to="{ name: 'Protocol', params: { id: props.row[column.field] }}" class="table_link_protocol">{{ props.row[column.field] }}</router-link>
          <div v-else class="table_link_protocol">{{ props.row[column.field] }}</div>
        </template>

        

        <template v-if="column.label == 'Nome' || column.label == 'Referência' || column.label == 'Valor'">
          <div v-if="column.label == 'Valor'" class="table_plain_value"> R${{ props.row[column.field] }} </div>
          <div v-else class="table_plain_value"> {{ props.row[column.field] }} </div>
        </template>
        
        <template v-if="column.label == 'Data / Hora' || column.label == 'Vencimento'">
          <div v-if="column.label == 'Data / Hora'" class="table_plain_value table_date_hour">
            {{ new Date(props.row[column.field]).toLocaleString('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'}) }}
          </div>
          <div v-else class="table_plain_value table_date_hour">
            {{ new Date(props.row[column.field]).toLocaleString('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric' }) }}
          </div>
        </template>
        
        <template v-if="column.label == 'Situação' || column.label == 'Status'">
          <TagSituation :type="props.row[column.field]" />
        </template>
        
        <template v-if="column.label == 'Ação'">
          <div v-if="props.row.action"></div>
          <div v-else class="table_empty_value">—</div>
        </template>
        
        <template v-if="column.label == 'Anexos'">
          <div class="table_download_document">
            <a v-if="props.row.document" :href="props.row.document" class="table_link_document" >
              <b-icon icon="paperclip"></b-icon>
              <span>Baixar Documento</span>
            </a>
            <div v-else class="table_empty_value">—</div>
          </div>
        </template>

        <template v-if="column.label == 'Nota' || column.label == 'Resposta'">
          <div class="table_note_response">
            <div v-if="column.label == 'Nota'" class="table_note_response_icon" @click="pinClicked">
              <b-icon icon="pin-outline"></b-icon>
            </div>
            <div v-else class="table_note_response_icon" @click="replyClicked">
              <b-icon icon="reply-outline"></b-icon>
            </div>
            <div class="table_note_response_person">{{ props.row[column.field].author }}:</div>
            <div class="table_note_response_message">{{ props.row[column.field].message }}</div>
            <div class="table_note_response_date">{{ new Date(props.row[column.field].date).toLocaleString('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric' })  }}</div>
          </div>
        </template>

        <template v-if="column.label == 'Enviar arquivo'">
          <div v-if="props.row.send_file" class="table_send_file" @click="sendFileClicked">
            <svg style="width:21px;height:21px" viewBox="0 0 24 24"><path fill="#4B4B4B" d="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 2L6.46 7.46L7.88 8.88L11 5.75V15H13V5.75L16.13 8.88L17.55 7.45L12 2Z" /></svg>
          </div>
          <div v-else class="table_empty_value">—</div>
        </template>

        <template v-if="column.label == 'Pagamento'">
          <div class="table_btn_boleto" @click="gerarBoleto">GERAR BOLETO</div>
        </template>
        
      </b-table-column>
    </template>
  </b-table>
</template>

<script>
import TagSituation from '@/components/TagSituation.vue'

export default {
  name: 'TableRTD',
  components: {
    TagSituation
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    columns: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      // table
      isPaginated: true,
      isPaginationSimple: false,
      isPaginationRounded: true,
      isHoverable: true,
      isLoading: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'chevron-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 8,
    }
  },
  methods: {
    pinClicked () {
      console.log('pinClicked - emit event')
    },
    replyClicked () {
      console.log('replyClicked - emit event')
    },
    sendFileClicked () {
      console.log('sendFileClicked - emit event')
    },
    gerarBoleto () {
      console.log('gerarBoleto - emit event')
    },

  }
}
</script>

<style>

</style>
