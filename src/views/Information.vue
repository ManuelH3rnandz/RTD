<template>
  <div class="information">
    <ContactInfo :info="info" />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactInfo from '@/components/ContactInfo.vue'

export default {
  name: 'Information',
  components: {
    ContactInfo
  },
  data () {
    return {
      info: [
        {
          id: 1,
          name: '1º CARTÓRIO RTD MANAUS',
          phones: [
            '(92) 3233-3779',
            '(92) 3234-6669',
            '(92) 3233-6266'
          ],
          whatsapps: [
            '(92) 99129-1288'
          ],
          emails: [
            'registro@rtdmanaus.com.br',
            'notificacao@rtdmanaus.com.br',
            'certidao@rtdmanaus.com.br'
          ],
          address: 'Av. Getúlio Vargas, 1149 - Centro Manaus - AM, 69020-011'
        },
        // {
        //   id: 2,
        //   name: '2º CARTÓRIO RTD MANAUS',
        //   phones: [
        //     '(92) 3233-3779',
        //     '(92) 3234-6669',
        //     '(92) 3233-6266'
        //   ],
        //   whatsapps: [
        //     '(92) 99129-1288'
        //   ],
        //   emails: [
        //     'registro@rtdmanaus.com.br',
        //     'notificacao@rtdmanaus.com.br',
        //     'certidao@rtdmanaus.com.br'
        //   ],
        //   address: 'Av. Getúlio Vargas, 1149 - Centro Manaus - AM, 69020-011'
        // }
      ]
    }
  }
}
</script>

<style>
  .information { min-height: calc(100vh - 120px); padding-top: 70px; }
</style>



     