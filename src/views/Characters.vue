<template>
    <div class="flex flex-wrap w-full">
        <div v-for="agent in agents" :key="agent.id" >
            <div class="flex flex-col items-center justify-center w-20 h-20 p-2 border border-black rounded-lg">
                <span class="text-xs font-bold">{{ agent.name }}</span>
                <img class="w-12 h-12" :src="returnFoto(agent.id)">
            </div>
        </div>
    </div>
</template>
<script>
import { useValorantStore } from '@/stores/valorant'
import { mapState, mapActions } from 'pinia'

export default {
    name: "Characters-index",
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
            return '/src/assets/characters/'+ id + '.png' ?? 'https://via.placeholder.com/150'
        }
    },
    mounted() {
        this.getAgents()
    }
}
</script>