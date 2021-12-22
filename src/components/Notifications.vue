<template>
  <div class="notifications">
    <b-dropdown :triggers="['hover']" aria-role="list">
      <template #trigger >

        <b-icon
            icon="bell-outline" class="notification_btn">
        </b-icon> 
        <span v-if="existNotification" class="exist_notification"></span>
          
      </template>


      <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
  </b-dropdown>
  </div>
</template>

<script>

export default {
  name: 'Notifications',
  data () {
    return {
      existNotification: true
    }
  }
}
</script>

<style>
  .notifications { }
  .bell_icon .mdi.mdi-bell-outline { font-size: 1.5rem; }
  .bell_icon { position: relative; }
  .exist_notification { width: 6px; height: 6px; border-radius: 50%; background: #FF5F57; position: absolute; top: 2px; right: 32px; }
  .notification_btn { margin-left: 31px; margin-right: 27px; }
  .notification_btn i { color: #7F9CB2; }
</style>
