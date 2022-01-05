// initial state
const state = () => ({
  allRequests: [
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
  ],
  typeRequest: [
    { id: 1, type: 'Pedido de Certidão' },
    { id: 2, type: 'Orçamento' },
    { id: 3, type: 'Registro (digitalização)' }
  ],
  notifications: [
    {
      id: 1,
      date: '2016-10-15 13:43:27',
      situation: 2,
      protocolo: '2021100817724268',
      viewed: false
    }
  ]
})

// getters
const getters = {
  countOrcamentoPendentes: (state) => {
    return state.allRequests.filter(req => (req.situation == 1)).length
  },
  countPagamentoPendente: (state) => {
    return state.allRequests.filter(req => (req.situation == 2)).length
  },
  countPagamentoRealizado: (state) => {
    return state.allRequests.filter(req => (req.situation == 3)).length
  },
  countNotasDevolutivas: (state) => {
    return state.allRequests.filter(req => (req.situation == 4)).length
  },
}

// actions
const actions = {
  createNewRequest ({ commit  }, req) {
    commit('ADD_NEW_REQUEST', req)
  }
}

// mutations
const mutations = {
  ADD_NEW_REQUEST (state, req) {
    state.allRequests.push(req)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}