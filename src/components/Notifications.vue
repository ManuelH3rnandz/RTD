<template>
  <div class="notifications">
    <b-dropdown :triggers="['hover']" aria-role="list">
      <template #trigger >

        <b-icon
            icon="bell-outline" class="notification_btn">
        </b-icon> 
        <span v-if="existNotification" class="exist_notification"></span>
          
      </template>

      <template v-for="notification in allNotifications">
        <b-dropdown-item aria-role="listitem"  :key="notification.id">
          <div class="notification_container">
            <TagSituation :type="notification.situation" />
          </div>
        </b-dropdown-item>
      </template>

  </b-dropdown>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TagSituation from '@/components/TagSituation.vue'

export default {
  name: 'Notifications',
  components: {
    TagSituation
  },
  computed: {
    ...mapState({
      allNotifications: state => state.requests.notifications,
    })
  },
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
