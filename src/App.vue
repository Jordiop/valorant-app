<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    RouterLink,
    RouterView
  }
}
</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView />
</template>