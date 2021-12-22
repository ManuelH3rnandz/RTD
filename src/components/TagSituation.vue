<template>
  <div class="tag_situation" :class="{ type_yellow: (type == 1), type_orange: (type == 2), type_green: (type == 3), type_pink: (type == 4) }">
    <span v-if="type == 1">ORÇ. PENDENTE</span>
    <span v-if="type == 2">PAG. PENDENTE</span>
    <span v-if="type == 3">PAG. REALIZADO</span>
    <span v-if="type == 4">NOTA DEVOLUTIVA</span>
  </div>
</template>

<script>
export default {
  name: 'TagSituation',
  props: {
    type: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tag_situation { height: 27px; display: inline-flex; justify-content: center; align-items: center; padding: 7px 8px 4px; border-radius: 5px; color: var(--white); font-family: 'Montserrat', sans-serif; font-weight: 500; font-size: 0.625rem; line-height: 0.625rem; letter-spacing: 0.5px; text-transform: uppercase; }
</style>
