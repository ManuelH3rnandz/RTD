// initial state
const state = () => ({
  allReturnNotes: [
    { 
      id: 1,
      note: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ester!\n Precisamos que você anexe os documentos para análise, pois não consta nenhuma informação no requerimento.\n\n No aguardo.',
        date: '2016-10-15 13:43:27'
      },
      send_file: false,
      response: {
        id: 1,
        author: 'Ester Lima',
        message: 'Olá Ellen!\n Perdão, acabei de anexar devidamente todos os documentos necessários para darmos continuidade no procedimento.\n\n Obrigado.',
        date: '2016-10-15 13:43:27'
      },
      document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0'
    },
    { 
      id: 2,
      note: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ester!\n Precisamos que você anexe os documentos para análise, pois não consta nenhuma informação no requerimento.\n\n No aguardo.',
        date: '2016-10-15 13:43:27'
      },
      send_file: true,
      response: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ellen!\n Perdão, acabei de anexar devidamente todos os documentos necessários para darmos continuidade no procedimento.\n\n Obrigado.',
        date: '2016-10-15 13:43:27'
      },
      document: null
    },
    { 
      id: 3,
      note: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ester!\n Precisamos que você anexe os documentos para análise, pois não consta nenhuma informação no requerimento.\n\n No aguardo.',
        date: '2016-10-15 13:43:27'
      },
      send_file: true,
      response: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ellen!\n Perdão, acabei de anexar devidamente todos os documentos necessários para darmos continuidade no procedimento.\n\n Obrigado.',
        date: '2016-10-15 13:43:27'
      },
      document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0'
    },
    { 
      id: 4,
      note: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ester!\n Precisamos que você anexe os documentos para análise, pois não consta nenhuma informação no requerimento.\n\n No aguardo.',
        date: '2016-10-15 13:43:27'
      },
      send_file: true,
      response: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ellen!\n Perdão, acabei de anexar devidamente todos os documentos necessários para darmos continuidade no procedimento.\n\n Obrigado.',
        date: '2016-10-15 13:43:27'
      },
      document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0'
    },
    { 
      id: 4,
      note: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ester!\n Precisamos que você anexe os documentos para análise, pois não consta nenhuma informação no requerimento.\n\n No aguardo.',
        date: '2016-10-15 13:43:27'
      },
      send_file: true,
      response: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ellen!\n Perdão, acabei de anexar devidamente todos os documentos necessários para darmos continuidade no procedimento.\n\n Obrigado.',
        date: '2016-10-15 13:43:27'
      },
      document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0'
    },
    { 
      id: 4,
      note: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ester!\n Precisamos que você anexe os documentos para análise, pois não consta nenhuma informação no requerimento.\n\n No aguardo.',
        date: '2016-10-15 13:43:27'
      },
      send_file: true,
      response: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ellen!\n Perdão, acabei de anexar devidamente todos os documentos necessários para darmos continuidade no procedimento.\n\n Obrigado.',
        date: '2016-10-15 13:43:27'
      },
      document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0'
    },
    { 
      id: 4,
      note: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ester!\n Precisamos que você anexe os documentos para análise, pois não consta nenhuma informação no requerimento.\n\n No aguardo.',
        date: '2016-10-15 13:43:27'
      },
      send_file: true,
      response: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ellen!\n Perdão, acabei de anexar devidamente todos os documentos necessários para darmos continuidade no procedimento.\n\n Obrigado.',
        date: '2016-10-15 13:43:27'
      },
      document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0'
    },
    { 
      id: 4,
      note: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ester!\n Precisamos que você anexe os documentos para análise, pois não consta nenhuma informação no requerimento.\n\n No aguardo.',
        date: '2016-10-15 13:43:27'
      },
      send_file: true,
      response: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ellen!\n Perdão, acabei de anexar devidamente todos os documentos necessários para darmos continuidade no procedimento.\n\n Obrigado.',
        date: '2016-10-15 13:43:27'
      },
      document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0'
    },
    { 
      id: 4,
      note: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ester!\n Precisamos que você anexe os documentos para análise, pois não consta nenhuma informação no requerimento.\n\n No aguardo.',
        date: '2016-10-15 13:43:27'
      },
      send_file: true,
      response: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ellen!\n Perdão, acabei de anexar devidamente todos os documentos necessários para darmos continuidade no procedimento.\n\n Obrigado.',
        date: '2016-10-15 13:43:27'
      },
      document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0'
    },
    { 
      id: 4,
      note: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ester!\n Precisamos que você anexe os documentos para análise, pois não consta nenhuma informação no requerimento.\n\n No aguardo.',
        date: '2016-10-15 13:43:27'
      },
      send_file: true,
      response: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ellen!\n Perdão, acabei de anexar devidamente todos os documentos necessários para darmos continuidade no procedimento.\n\n Obrigado.',
        date: '2016-10-15 13:43:27'
      },
      document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0'
    },
    { 
      id: 4,
      note: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ester!\n Precisamos que você anexe os documentos para análise, pois não consta nenhuma informação no requerimento.\n\n No aguardo.',
        date: '2016-10-15 13:43:27'
      },
      send_file: true,
      response: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ellen!\n Perdão, acabei de anexar devidamente todos os documentos necessários para darmos continuidade no procedimento.\n\n Obrigado.',
        date: '2016-10-15 13:43:27'
      },
      document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0'
    },
    { 
      id: 4,
      note: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ester!\n Precisamos que você anexe os documentos para análise, pois não consta nenhuma informação no requerimento.\n\n No aguardo.',
        date: '2016-10-15 13:43:27'
      },
      send_file: true,
      response: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ellen!\n Perdão, acabei de anexar devidamente todos os documentos necessários para darmos continuidade no procedimento.\n\n Obrigado.',
        date: '2016-10-15 13:43:27'
      },
      document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0'
    },
    { 
      id: 4,
      note: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ester!\n Precisamos que você anexe os documentos para análise, pois não consta nenhuma informação no requerimento.\n\n No aguardo.',
        date: '2016-10-15 13:43:27'
      },
      send_file: true,
      response: {
        id: 1,
        author: 'Ellen Gama',
        message: 'Olá Ellen!\n Perdão, acabei de anexar devidamente todos os documentos necessários para darmos continuidade no procedimento.\n\n Obrigado.',
        date: '2016-10-15 13:43:27'
      },
      document: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0'
    },
    
  ],
  columns: [
    {
        field: 'note',
        label: 'Nota'
    },
    {
        field: 'send_file',
        label: 'Enviar arquivo',
    },
    {
        field: 'response',
        label: 'Resposta',
    },
    {
        field: 'document',
        label: 'Anexos',
    }
  ]
})

// getters
const getters = {}

// actions
const actions = {
}

// mutations
const mutations = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}