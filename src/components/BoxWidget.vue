<template>
  <div class="box_widget" :class="color" @click="onclick">
    <div class="box_widget_count_btn">
      <span v-if="!isBtn" class="count">{{ count | fillZero }}</span>
      <span v-else class="plus_btn">
        <b-icon icon="plus" type="is-white" size="is-small" />
      </span>
    </div>
    <div class="box_widget_title">
      {{ title }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'BoxWidget',
  props: {
    title: {
      type: String,
      default: ''
    },
    count: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: ''
    },
    isBtn: {
      type: Boolean,
      default: false
    },
    chave: {
      type: String,
      default: ''
    }
  },
  filters: {
    fillZero: function (value) {
      if (value < 10) return '0' + value
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onclick () {
      this.$emit('beenclicked', this.chave)
    }
  }
}
</script>

<style scoped>
  .box_widget { padding: 10px 20px 24px 21px; background: var(--primary_blue); border-radius: 10px; box-shadow: 0px 3px 6px #9DCEFF29; width: calc((100% / 5) - 17px); height: 99px; cursor: pointer; }
  .box_widget_count_btn { display: flex; justify-content: flex-end; }
  .count { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 1.625rem; line-height: 2rem; letter-spacing: 1.3px; color: var(--white); }
  .box_widget_title { font-family: 'Montserrat', sans-serif; font-weight: 400; font-size: 1rem; line-height: 1.125rem; letter-spacing: 0.8px; color: var(--white); display: table-caption; }
  .plus_btn { width: 26px; height: 26px; display: flex; justify-content: center; align-items: center; background: var(--blue_accent); border-radius: 50%; margin-top: 7px; }
</style>
