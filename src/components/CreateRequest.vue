<template>
  <div class="create_request">
    <div class="new_request_modal">
      <div class="close_modal" @click="close">
        <svg xmlns="http://www.w3.org/2000/svg" width="13.671" height="13.67" class="close_modal_icon" viewBox="0 0 13.671 13.67"><path d="M16.916,15.84l3.252-3.252a.762.762,0,0,0-1.078-1.078l-3.252,3.252L12.587,11.51a.762.762,0,1,0-1.078,1.078l3.252,3.252-3.252,3.252a.762.762,0,0,0,1.078,1.078l3.252-3.252,3.252,3.252a.762.762,0,0,0,1.078-1.078Z" transform="translate(6.837 -15.609) rotate(45)" fill="#fff" stroke="#fff" stroke-width="0.5"/></svg>
      </div>
      <div class="new_request_title">{{ titleModal }}</div>
      <span v-html="iconFile" class="logo_file"></span>
      <b-field class="field_new_request">
        <b-select
          v-model="typeRequest"
          placeholder="Escolher tipo de solicitação"
          expanded>
          <option v-for="option in typeRequestOption" :key="option.id" :value="option.type">
            {{ option.type }}
          </option>
        </b-select>
      </b-field>
      <b-field class="field_new_request">
        <b-input v-model="descritionRequest" placeholder="Descrição" type="textarea" class="max_height"></b-input>
      </b-field>
      <b-field class="file field_new_request">
        <b-upload v-model="file" expanded>
          <a class="button is-fullwidth">
            <b-icon icon="upload"></b-icon>
            <span>{{ file.name || "Upload"}}</span>
          </a>
        </b-upload>
      </b-field>
      <b-button @click="sendRequest" expanded class="field_new_request_send">Enviar</b-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CreateRequest',
  props: {
    msg: String
  },
  computed: {
    ...mapState({
      typeRequestOption: state => state.requests.typeRequest,
    })
  },
  data () {
    return {
      titleModal: 'Criar solicitação',
      iconClose: ``,
      iconFile: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="125.528" height="131.132" viewBox="0 0 125.528 131.132"><defs><clipPath id="a"><rect width="125.528" height="131.132" fill="none"/></clipPath><clipPath id="c"><rect width="88.828" height="50.506" fill="none"/></clipPath></defs><g clip-path="url(#a)"><g transform="translate(0 -0.001)"><g clip-path="url(#a)"><path d="M31.9,5.929V74.713H115.5V5.929A5.928,5.928,0,0,0,109.576,0H37.825A5.928,5.928,0,0,0,31.9,5.929" transform="translate(10.024 0.001)" fill="#477ebf"/><path d="M19.131,106.361,37.806,54.993l81.721,2.439-12.182,46.852a4.144,4.144,0,0,1-4.1,3.1l-21.168-.449-3.472,4.935a4.666,4.666,0,0,1-4.012,1.977l-51.151-2.161a4.6,4.6,0,0,1-4.313-5.324" transform="translate(6.001 17.283)" fill="#477ebf"/><path d="M35.3,9.21V63.041l73.487,4.045L108.468,9.21Z" transform="translate(11.095 2.895)" fill="#f5f5f5"/><path d="M35.371,9.284a2.012,2.012,0,0,1,.327-.018l1-.017,3.935-.037,14.942-.083,52.958-.152h.306v.308c.1,16.781.222,35.881.347,56.064,0,.61.008,1.22.011,1.812v.364l-.363-.021-73.483-4.11-.263-.014v-.263c.05-16.327.091-29.776.12-39.176.034-4.675.062-8.342.08-10.872q.03-1.831.045-2.839c.013-.635.033-.945.033-.945s.02.351.033,1q.016,1.007.045,2.844c.018,2.516.046,6.163.08,10.812.029,9.4.07,22.849.12,39.176l-.262-.277,73.49,3.981-.361.344c0-.593-.007-1.2-.009-1.812-.1-20.183-.2-39.285-.28-56.065l.309.306L55.777,9.439,40.764,9.356l-4-.037L35.733,9.3a2.982,2.982,0,0,1-.363-.018" transform="translate(11.028 2.821)" fill="#263238"/><path d="M38.228,21.7c.066-1.793,0-9.49,0-9.49,20.543-.064,43.556.081,64.1.018.576,10.165.7,23.893,1.271,34.058" transform="translate(12.014 3.832)" fill="#ebebeb"/><path d="M103.645,46.361a2.95,2.95,0,0,1-.087-.641c-.038-.478-.085-1.1-.146-1.866-.113-1.631-.239-4.016-.368-7.026-.281-6.017-.447-14.541-.988-24.506l.318.3-19.751.018c-18.418-.005-34.674-.068-44.349-.162l.193-.195c-.038,2.949-.068,5.307-.091,7-.02.766-.037,1.379-.05,1.856a2.987,2.987,0,0,1-.053.637,2.943,2.943,0,0,1-.053-.641c-.013-.476-.03-1.091-.051-1.857-.021-1.689-.053-4.044-.091-6.989l0-.195h.2c9.674-.087,25.929-.142,44.349-.137l19.751.03h.3l.016.3c.493,9.991.57,18.51.741,24.529.078,2.96.141,5.328.187,7.03.018.771.033,1.389.043,1.87a2.983,2.983,0,0,1-.018.647" transform="translate(11.967 3.757)" fill="#e0e0e0"/><path d="M26.758,19.667,41.921,63.876h69.555L101.084,19.427Z" transform="translate(8.409 6.106)" fill="#fff"/><path d="M26.758,19.743a2.487,2.487,0,0,1,.334-.017l1.029-.018,4.04-.047,15.289-.133,53.634-.342h.252l.058.247c3.077,13.13,6.457,27.547,10,42.645.142.6.283,1.209.421,1.8l.1.421h-.432l-69.555-.07h-.2l-.062-.184c-4.572-13.532-8.322-24.625-10.939-32.369-1.276-3.81-2.275-6.793-2.968-8.858-.326-.987-.58-1.752-.761-2.3-.168-.517-.238-.77-.238-.77s.114.285.306.816q.3.836.829,2.339c.727,2.071,1.777,5.064,3.119,8.886,2.671,7.675,6.5,18.669,11.165,32.08l-.256-.184,69.555-.07-.333.419c-.138-.587-.279-1.192-.421-1.8-3.522-15.1-6.885-29.522-9.948-42.656l.31.246-53.385,0L32.321,19.79l-4.115-.021-1.071-.012a3.6,3.6,0,0,1-.377-.014" transform="translate(8.409 6.029)" fill="#263238"/><g transform="translate(31.329 70.628)" opacity="0.3"><g clip-path="url(#c)"><path d="M112.309,54.016a1.866,1.866,0,0,0-1.735-.13A273.876,273.876,0,0,0,33.6,87.414l-9.76,11.292c1.234,1.941,3.876,2.284,6.172,2.434l32.773,2.136c7.62.5,15.248.994,22.884.969,4.53-.016,9.489-.385,12.79-3.488,1.941-1.823,3.029-4.355,4.006-6.832A170.591,170.591,0,0,0,112.61,55.676a1.856,1.856,0,0,0-.3-1.66" transform="translate(-23.837 -53.739)"/></g></g><path d="M42.945,56.74,23.5,98.786l72.992,1.46,16.009-47Z" transform="translate(7.385 16.734)" fill="#f5f5f5"/><path d="M43.045,56.82a1.694,1.694,0,0,1,.315-.038l.959-.07,3.759-.231,14.245-.8,50.261-2.663.457-.024-.149.435c-4.829,14.209-10.257,30.178-15.978,47.009l-.08.237-.251-.005h-.013L23.6,99.137l-.415-.009.175-.375L37.678,68.09c1.7-3.605,3.033-6.427,3.955-8.38l1.042-2.171c.238-.486.371-.719.371-.719s-.1.277-.325.786q-.357.8-.995,2.233c-.9,1.975-2.19,4.83-3.842,8.477-3.355,7.327-8.163,17.831-14.039,30.664l-.239-.384,72.98,1.387H96.6l-.331.231c5.742-16.823,11.19-32.786,16.037-46.988l.31.41-50.13,2.379-14.3.632-3.809.147-.986.029a2.216,2.216,0,0,1-.344-.005" transform="translate(7.285 16.654)" fill="#263238"/><path d="M43.093,53.247,22,76.473l72.512.547,18.138-23.772Z" transform="translate(6.914 16.734)" fill="#fafafa"/><path d="M43.226,53.325a1.465,1.465,0,0,1,.325-.026c.25-.005.573-.014.98-.025l3.825-.049,14.394-.093L112.782,53h.656l-.4.523L94.916,77.305l-.1.137h-.171l-2.211-.017-70.3-.626-.555-.005.373-.407L37.5,59.439c1.819-1.962,3.241-3.495,4.236-4.567L42.84,53.7a3.28,3.28,0,0,1,.386-.377,3.873,3.873,0,0,1-.357.443L41.793,55c-.976,1.1-2.372,2.665-4.158,4.674L22.315,76.716l-.18-.413,70.3.435,2.211.017-.275.134,18.151-23.762.259.522-49.915-.131-14.431-.093-3.863-.049-1-.025a1.862,1.862,0,0,1-.347-.026" transform="translate(6.781 16.656)" fill="#263238"/><path d="M37.8,42.485,31.569,23.08H96.2l9.055,35.483" transform="translate(9.921 7.254)" fill="#f5f5f5"/><path d="M105.343,58.644a3.514,3.514,0,0,1-.221-.654c-.137-.488-.317-1.125-.543-1.927-.468-1.748-1.125-4.2-1.949-7.278L95.983,23.239l.3.237L72.093,23.5l-40.44-.088.243-.333c1.861,5.955,3.378,10.8,4.447,14.224l1.175,3.886c.117.413.212.747.289,1.017a1.407,1.407,0,0,1,.075.355,1.25,1.25,0,0,1-.146-.331c-.1-.265-.213-.593-.357-.995-.318-.934-.754-2.22-1.306-3.846-1.121-3.405-2.71-8.229-4.663-14.155l-.109-.333h.352l40.44-.087,24.193.028h.246l.059.235C99.2,33.5,101.416,42.367,103,48.69c.75,3.1,1.35,5.565,1.777,7.323.187.812.334,1.458.447,1.95a3.534,3.534,0,0,1,.121.681" transform="translate(9.837 7.172)" fill="#263238"/><path d="M43.25,58.088,21.5,37.845l71.182.577,20.445,19.665Z" transform="translate(6.757 11.894)" fill="#fafafa"/><path d="M43.4,58.147a1.743,1.743,0,0,1,.35-.026l1.008-.026,3.89-.05,14.525-.095,50.105-.13-.226.563L92.6,38.727l.234.1-1.321-.011-69.861-.665.168-.422c6.655,6.26,12.049,11.333,15.809,14.871l4.292,4.082c.469.455.837.812,1.111,1.079a3.461,3.461,0,0,1,.371.389,3,3,0,0,1-.4-.325c-.281-.25-.658-.586-1.138-1.016L37.5,52.836,21.485,38.082l-.463-.426.631,0,69.864.468,1.32.011h.137l.1.095L113.5,57.911l.586.564-.812,0-50.214-.129-14.491-.095-3.855-.05-.99-.026a1.5,1.5,0,0,1-.329-.026" transform="translate(6.607 11.835)" fill="#263238"/><line x2="46.659" transform="translate(46.895 57.521)" fill="#fafafa"/><path d="M82.341,43.849c0,.189-10.446.342-23.328.342s-23.331-.152-23.331-.342,10.443-.342,23.331-.342,23.328.152,23.328.342" transform="translate(11.214 13.673)" fill="#263238"/><line x2="46.659" transform="translate(52.056 62.334)" fill="#fafafa"/><path d="M86.267,47.51c0,.189-10.446.342-23.328.342S39.608,47.7,39.608,47.51s10.443-.342,23.331-.342,23.328.152,23.328.342" transform="translate(12.447 14.824)" fill="#263238"/><line x2="46.659" transform="translate(56.692 66.971)" fill="#fafafa"/><path d="M89.8,51.039c0,.189-10.446.342-23.328.342s-23.331-.152-23.331-.342S53.579,50.7,66.467,50.7s23.328.152,23.328.342" transform="translate(13.556 15.933)" fill="#263238"/><line x2="48.155" transform="translate(49.379 85.565)" fill="#fafafa"/><path d="M85.727,65.186c0,.189-10.781.342-24.076.342s-24.079-.152-24.079-.342,10.778-.342,24.079-.342,24.076.152,24.076.342" transform="translate(11.808 20.379)" fill="#263238"/><line x2="48.155" transform="translate(54.86 80.084)" fill="#fafafa"/><path d="M89.9,61.016c0,.189-10.781.342-24.076.342s-24.079-.152-24.079-.342,10.778-.342,24.079-.342,24.076.152,24.076.342" transform="translate(13.118 19.068)" fill="#263238"/><path d="M14.036,98.477a4.49,4.49,0,0,1-.375-.835c-.219-.557-.557-1.373-.938-2.445-.787-2.133-1.845-5.253-2.941-9.172A92.97,92.97,0,0,1,6.248,54.532,67.787,67.787,0,0,1,9.826,37.389a57.27,57.27,0,0,1,6.349-12.815A47.808,47.808,0,0,1,22.269,17.1c.782-.828,1.482-1.377,1.919-1.785a4.639,4.639,0,0,1,.71-.577,4.584,4.584,0,0,1-.615.678c-.406.439-1.074,1.016-1.822,1.869a52.375,52.375,0,0,0-5.88,7.552A58.773,58.773,0,0,0,10.422,37.6,68.769,68.769,0,0,0,6.93,54.584,96.441,96.441,0,0,0,10.248,85.9c1.033,3.92,2.019,7.055,2.727,9.212L13.79,97.6a4.586,4.586,0,0,1,.246.882" transform="translate(1.898 4.633)" fill="#263238"/><path d="M2.222,48a5.564,5.564,0,0,1-.06-1.413,34.946,34.946,0,0,1,.258-3.844A49.164,49.164,0,0,1,11.671,19.31a35.443,35.443,0,0,1,2.438-2.983,5.619,5.619,0,0,1,1.009-.99c.091.079-1.224,1.6-3.053,4.254A55.324,55.324,0,0,0,2.9,42.811C2.419,46,2.341,48.007,2.222,48" transform="translate(0.679 4.82)" fill="#263238"/><path d="M7.093,36.443c.072.059-.318.685-1.008,1.648L4.846,39.76l-.752.971-.4.511-.206.26-.105.13-.053.067-.026.033-.013.016-.007.008,0,.005c.112,0-.986.032-.522.016h0A11.38,11.38,0,0,1,.364,37.72,3.852,3.852,0,0,1,.038,35.8c.2-.071.808,2.894,3.224,5.512v0c.465-.016-.632.022-.518.017l0,0,.005-.008.014-.017.028-.033.053-.066.1-.13.209-.259.41-.5c.263-.319.522-.633.782-.948l1.354-1.577c.787-.886,1.312-1.4,1.387-1.346" transform="translate(0 11.251)" fill="#263238"/></g></g></g></svg>`,
      typeRequest: null,
      descritionRequest: '',
      file: {},
    }
  },
  methods: {
    makeProtocol () {
      let data = new Date()
      return ("0" + data.getDate()).substr(-2)+("0" + (data.getMonth() + 1)).substr(-2)+data.getFullYear()+Math.floor(1000 + Math.random() * 9000)
    },
    close () {
      this.typeRequest = []
      this.descritionRequest = ''
      this.file = {}
      this.$emit("close")
    },
    sendRequest () {
      let aux = {
        protocol: this.makeProtocol(),
        name: this.typeRequest,
        description: this.descritionRequest,
        date: '2016-10-15 13:43:27',
        situation: 1,
        action: null,
        document: this.file
      }
      this.createNewRequest(aux)
      this.close()
    },
    // ...mapActions({
    //   createRequest: 'createRequest' // map `this.add()` to `this.$store.dispatch('increment')`
    // }),
    ...mapActions('requests', [
      'createNewRequest'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.create_request { position: fixed; width: 100vw; height: 100vh; top: 0; left: 0; background: rgba(8, 41, 67, .7) 0% 0% no-repeat padding-box; z-index: 8000; display: flex; justify-content: center; align-items: center; }
.new_request_modal { position: relative; width: 379px; height: 565px; background: var(--white); border-radius: 30px; padding: 52px 34px; display: flex; flex-direction: column; align-items: center; }
.close_modal { position: absolute; top: 18px; right: 18px; width: 30px; height: 30px; border-radius: 50%; background: var(--blue_accent); display: flex; justify-content: center; align-items: center; cursor: pointer; }
.close_modal_icon { transform: rotate(45deg); margin-bottom: 0; margin-left: -1px; }
.new_request_title { font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 1.5625rem; color: #4E5367; }
.logo_file { margin: 27px auto; }
.field_new_request { width: 100%;  }
.field_new_request input, .field_new_request textarea, .field_new_request .button { border-color: #E0E0E0!important; }
.field_new_request input::placeholder, .field_new_request textarea::placeholder, .field_new_request .button { color: #868D96!important; }
.field_new_request textarea { min-height: 88px!important; max-height: 88px!important; }
.field_new_request_send { background: #477EBF!important; color: var(--white)!important; font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 1rem; }
</style>
