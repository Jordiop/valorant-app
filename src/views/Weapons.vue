<template>
  <main>
    <div>
      <div v-if="isLoading">
        <div class="flex flex-col items-center justify-center w-full gap-4">
          <div class="flex items-center justify-center text-4xl text-blue-400 border-8 border-gray-300 rounded-full w-28 h-28 animate-spin border-t-blue-400">
            <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" class="animate-ping">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-if = "isLoaded" class="flex flex-wrap w-full p-2">
          <div v-for="weapon in weapons" :key="weapon.id">
            <div class="p-2 border rounded-lg w-28 h-28">
              <span class="flex items-center justify-center mb-2 text-xs font-bold">{{ weapon.name }}</span>
              <img :src="returnFoto(weapon.id)">
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { useValorantStore } from '@/stores/valorant'
import { mapState, mapActions } from 'pinia'
export default {
  name: 'HomeView',
  components: {},
  computed: {
    ...mapState(useValorantStore, {
      agents: "agents",
      isLoaded: "isLoaded",
      maps: "maps",
      weapons: "weapons",
      isLoading: "isLoading",
    }),
  },
  methods: {
    ...mapActions(useValorantStore, ['getAgents', 'getMaps', 'getWeapons']),
    returnFoto(id) {
      return '/src/assets/weapons/'+ id + '.png' ?? "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/2560px-Valorant_logo_-_pink_color_version.svg.png"
    }
  },
  mounted() {
    if (!this.isLoaded) {
      this.getWeapons()
    } 
  }
}

</script>