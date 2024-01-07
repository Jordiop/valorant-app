import { defineStore } from 'pinia'
import valorantService from '@/services/valorant'

export const useValorantStore = defineStore('valorantStore', {
    state: () => ({
        agents: {},
        maps: {},
        weapons: {},
        isLoading: false,
        isLoaded: false
    }),
    actions: {
        async getAgents() {
            this.agents = await valorantService.getAgents()
        },
        async getMaps() {
            this.maps = await valorantService.getMaps()
        },
        async getWeapons() {
            try {
                this.isLoading = true
                this.weapons = await valorantService.getWeapons()
            } catch (e) {
                console.log('error', e)
                this.isLoaded = true
            } finally {
                this.isLoading = false
                this.isLoaded = true
            }
        }
    }
})