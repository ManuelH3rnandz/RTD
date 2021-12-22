<template>
  <div class="box_did_you_know">
    <div class="did_you_know">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs></defs><g transform="translate(-108 -625)"><g transform="translate(-3892 785)"><g transform="translate(4000 -160)"><path class="a" d="M8,15a7,7,0,1,1,7-7,7,7,0,0,1-7,7Zm0,1A8,8,0,1,0,0,8,8,8,0,0,0,8,16Z"/><path class="a" d="M8.93,6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738,3.468c-.194.9.105,1.319.808,1.319A2.071,2.071,0,0,0,8.831,12l.088-.416a1.108,1.108,0,0,1-.686.246c-.275,0-.375-.193-.3-.533ZM9,4.5a1,1,0,1,1-1-1A1,1,0,0,1,9,4.5Z"/></g></g></g></svg>
      <div class="did_you_know_title">Você sabia?</div>
      <div class="msg">
        {{ msg }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DidYouKnow',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box_did_you_know { width: 100%; padding: 0 40px;}
  .did_you_know { background: rgba(194, 205, 243, .1); border-radius: 15px; padding: 19px 8px; display: flex; flex-direction: column; align-items: center; }
  .did_you_know_title { font-family: 'Montserrat', sans-serif; font-weight: 700; color: var(--blue_accent); font-size: 0.75rem; line-height: 0.9375rem; margin-bottom: 4px; }
  .did_you_know svg, .did_you_know svg path { fill: #BBC4CC; }
  .did_you_know svg { margin-bottom: 5px; }
  .msg { font-family: 'Montserrat', sans-serif; font-weight: 300; font-size: 0.625rem; line-height: 0.8125rem; color: rgba(255, 255, 255, .7); text-align: center; }
</style>
