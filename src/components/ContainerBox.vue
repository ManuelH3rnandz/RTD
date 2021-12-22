<template>
  <div class="container_box">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'ContainerBox',
  data () {
    return {
      existNotification: true
    }
  }
}
</script>

<style>
  .container_box { width: 100%; height: auto; background: var(--white); box-shadow: 0px 3px 6px #9DCEFF29; border-radius: 10px; padding: 24px 22px 19px; }
</style>
