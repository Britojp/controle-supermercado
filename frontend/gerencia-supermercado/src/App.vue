<template>
  <v-app>
    <v-main>
      <NavBar v-if="!hideNavBar" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar
  },
  computed: {
    hideNavBar() {
      return this.$route.meta.hideNavBar === true
    }
  }
})
</script>
