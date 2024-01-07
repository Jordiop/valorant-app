<template>
  <main>
    <div>
      <h2 class="font-bold text-red-500">This is the home page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, voluptatem, quibusdam, quia voluptas quod voluptatum
        consequatur quos doloribus quae quas. Quisquam, voluptatibus, voluptas
        quod voluptatum consequatur quos doloribus quae quas.
      </p>
    </div>
    <div>
      <div v-if="isLoading">
        <div class="flex flex-wrap">
          <div class="w-20 h-20">Loading...</div>
        </div>
      </div>
      <div v-else>
        <div v-if = "isLoaded">
          <div v-for="weapon in weapons" class="flex flex-wrap">
            <div class="w-20 h-20">
              <p class="">{{ weapon.name }}</p>
              <p>{{ weapon.id }}</p>
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
  },
  mounted() {
    this.getWeapons()
  }
}

</script>