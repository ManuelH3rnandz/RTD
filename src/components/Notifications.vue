<template>
  <div class="notifications">
    <b-dropdown :triggers="['hover']" aria-role="list">
      <template #trigger >

        <b-icon
            icon="bell-outline" class="notification_btn">
        </b-icon> 
        <span v-if="existNotifications" class="exist_notification"></span>
          
      </template>

      <template v-if="existNotifications">
         <template v-for="notification in allNotifications">
          <b-dropdown-item aria-role="listitem"  :key="notification.id">
            <div class="notification_container">
              <div class="notification_view" :class="{ active: notification.viewed }"></div>
              <div class="notification_date_hour">
                <div class="notification_date">
                  {{ new Date(notification.date).toLocaleString('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric' })  }}
                </div>
                <div class="notification_hour">
                  {{ new Date(notification.date).toLocaleString('pt-BR', { hour: '2-digit', minute:'2-digit'})  }}
                </div>
              </div>
              <p class="notification_text">
                {{ notificationText }}
              </p>
              <TagSituation :type="notification.situation" class="w_100" />
            </div>
          </b-dropdown-item>
          <hr class="dropdown-divider" :key="notification.id+'_hr'">
        </template>
      </template>
      <template v-else>
        <b-dropdown-item aria-role="listitem">Não tem Notificações</b-dropdown-item>
      </template>
  </b-dropdown>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TagSituation from '@/components/TagSituation.vue'

export default {
  name: 'Notifications',
  components: {
    TagSituation
  },
  computed: {
    ...mapGetters('requests', {
      allNotifications: 'getNotifications',
      existNotifications: 'existNotifications'
    })
  },
  data () {
    return {
      notificationText: 'O status da sua situação foi atualizado para:'
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
  .notification_container { position: relative; width: 185px; padding: 5px 8px 0; }
  .notification_date_hour { display: flex; justify-content: space-between; align-items: center; color: #7F9EB4; font-family: 'Montserrat', sans-serif; font-weight: 500; font-size: 0.75rem; margin-bottom: 11px; margin-top: 16px; }
  .notification_date { }
  .notification_hour { }
  .w_100 { width: 100%; }
  .notification_text { font-family: 'Montserrat', sans-serif; font-weight: 500; color: #4B4B4B91; font-size: 0.75rem; margin-bottom: 12px; white-space: pre-line; text-align: left; }
  .notification_view { position: absolute; top: 2px; right: 8px; width: 8px; height: 8px; border: solid 2px #4B4B4B4D; border-radius: 50%; }
  .notification_view.active { border: solid 2px #FF5F57; background: #FF5F57; }
  .dropdown .dropdown-menu .dropdown-content hr:nth-last-child(1) { display: none!important; }
  .dropdown { cursor: pointer; }
</style>
