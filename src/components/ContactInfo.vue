<template>
  <div  class="contact_info">
    <div v-for="cartorio in info" :key="cartorio.id" class="info_list">
      <div class="info_logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 16 16"><defs></defs><g transform="translate(-108 -625)"><g transform="translate(-3892 785)"><g transform="translate(4000 -160)"><path class="a" d="M8,15a7,7,0,1,1,7-7,7,7,0,0,1-7,7Zm0,1A8,8,0,1,0,0,8,8,8,0,0,0,8,16Z"/><path class="a" d="M8.93,6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738,3.468c-.194.9.105,1.319.808,1.319A2.071,2.071,0,0,0,8.831,12l.088-.416a1.108,1.108,0,0,1-.686.246c-.275,0-.375-.193-.3-.533ZM9,4.5a1,1,0,1,1-1-1A1,1,0,0,1,9,4.5Z"/></g></g></g></svg>
      </div>
      <div class="info_name">{{ cartorio.name }}</div>
      <div class="info_box">
        <div class="info_logo_small">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M3.654,1.328a.678.678,0,0,0-1.015-.063L1.605,2.3a1.716,1.716,0,0,0-.45,1.77,17.568,17.568,0,0,0,4.168,6.608,17.569,17.569,0,0,0,6.608,4.168,1.716,1.716,0,0,0,1.77-.45l1.034-1.034a.678.678,0,0,0-.063-1.015l-2.307-1.794a.678.678,0,0,0-.58-.122l-2.19.547a1.745,1.745,0,0,1-1.657-.459L5.482,8.062a1.745,1.745,0,0,1-.46-1.657l.548-2.19a.678.678,0,0,0-.122-.58ZM1.884.511A1.745,1.745,0,0,1,4.5.674L6.29,2.98a1.744,1.744,0,0,1,.315,1.494l-.547,2.19a.678.678,0,0,0,.178.643L8.693,9.764a.678.678,0,0,0,.644.178L11.526,9.4a1.745,1.745,0,0,1,1.494.315L15.326,11.5a1.745,1.745,0,0,1,.163,2.611l-1.034,1.034a2.777,2.777,0,0,1-2.877.7,18.634,18.634,0,0,1-7.01-4.42A18.634,18.634,0,0,1,.148,4.422a2.78,2.78,0,0,1,.7-2.877L1.885.511Z" transform="translate(0 0)" fill="#87a0b2"/></svg>
        </div>
        <a v-for="phone in cartorio.phones" :key="phone" :href="phone" class="info_link">{{ phone }}</a>
      </div>
      <div class="info_box">
        <div class="info_logo_small">
          <svg xmlns="http://www.w3.org/2000/svg" width="15.928" height="16" viewBox="0 0 15.928 16"><path d="M13.6,2.326A7.854,7.854,0,0,0,7.994,0,7.934,7.934,0,0,0,1.121,11.891L0,16l4.2-1.1a7.933,7.933,0,0,0,3.79.965H8A7.926,7.926,0,0,0,13.6,2.326ZM7.994,14.521a6.573,6.573,0,0,1-3.356-.92l-.24-.144L1.9,14.111l.666-2.433-.156-.251a6.587,6.587,0,1,1,5.58,3.094Zm3.615-4.934c-.2-.1-1.17-.578-1.353-.646s-.315-.1-.445.1-.513.646-.627.775-.232.148-.43.05A5.409,5.409,0,0,1,7.162,8.88a6.046,6.046,0,0,1-1.1-1.372c-.114-.2-.011-.3.088-.4s.2-.232.3-.346a1.264,1.264,0,0,0,.2-.33.369.369,0,0,0-.015-.347c-.05-.1-.445-1.076-.612-1.47s-.323-.335-.445-.34-.247-.007-.38-.007a.729.729,0,0,0-.529.247,2.22,2.22,0,0,0-.691,1.654,3.838,3.838,0,0,0,.81,2.049,8.808,8.808,0,0,0,3.383,2.992,11.021,11.021,0,0,0,1.129.418,2.721,2.721,0,0,0,1.246.08,2.052,2.052,0,0,0,1.338-.943,1.659,1.659,0,0,0,.114-.943c-.049-.084-.182-.133-.38-.232Z" transform="translate(0 0)" fill="#87a0b2"/></svg>
        </div>
        <a v-for="whatsapp in cartorio.whatsapps" :key="whatsapp" :href="whatsapp" class="info_link">{{ whatsapp }}</a>
      </div>
      <div class="info_box">
        <div class="info_logo_small">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12"><g transform="translate(-505 -445)"><path d="M0,4A2,2,0,0,1,2,2H14a2,2,0,0,1,2,2v8a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2ZM2,3A1,1,0,0,0,1,4v.217l7,4.2,7-4.2V4a1,1,0,0,0-1-1ZM15,5.383,10.292,8.208,15,11.1Zm-.034,6.876L9.326,8.788,8,9.583l-1.326-.8-5.64,3.47A1,1,0,0,0,2,13H14a1,1,0,0,0,.966-.741ZM1,11.1l4.708-2.9L1,5.383Z" transform="translate(505 443)" fill="#87a0b2" fill-rule="evenodd"/></g></svg>
        </div>
        <a v-for="email in cartorio.emails" :key="email" :href="email" class="info_link">{{ email }}</a>
      </div>
      <div class="info_logo_small">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><g transform="translate(-2 10)"><g transform="translate(0 -10)"><path d="M12.166,8.94a19.226,19.226,0,0,1-1.96,3.07A31.493,31.493,0,0,1,8,14.58a31.482,31.482,0,0,1-2.206-2.57,19.225,19.225,0,0,1-1.96-3.07A6.919,6.919,0,0,1,3,6,5,5,0,1,1,13,6a6.933,6.933,0,0,1-.834,2.94ZM8,16s6-5.686,6-10A6,6,0,1,0,2,6C2,10.314,8,16,8,16Z" fill="#87a0b2"/><path d="M8,8a2,2,0,1,1,2-2A2,2,0,0,1,8,8ZM8,9A3,3,0,1,0,5,6,3,3,0,0,0,8,9Z" fill="#87a0b2"/></g></g></svg>
      </div>
      <div class="info_address">{{ cartorio.address }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo',
  props: {
    info: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contact_info { display: flex; flex-direction: column; align-items: center; }
  .info_list { display: inline-flex; flex-direction: column; align-items: center; margin-bottom: 80px; }
  .info_logo, .info_logo_small { text-align: center; }
  .info_logo { margin-bottom: 23px; }
  .info_logo svg path { fill: #87A0B240; }
  .info_name { font-family: 'Montserrat', sans-serif; font-weight: 400; font-size: 1rem; color: #87A0B2; margin-bottom: 31px; }
  .info_box { display: flex; flex-direction: column; align-items: center; margin-bottom: 20px; }
  .info_logo_small { margin-bottom: 10px; }
  .info_link, .info_address { font-family: 'Montserrat', sans-serif; font-weight: 400; font-size: 1rem; line-height: 1.5rem; color: #87A0B2; }
  .info_address { max-width: 60%; text-align: center; }
</style>
