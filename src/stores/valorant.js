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
            try {
                this.isLoading = true
                this.agents = await valorantService.getAgents()
            } catch (e) {
                console.log('error', e)
                this.isLoaded = true
            } finally {
                this.isLoading = false
                this.isLoaded = true
            }
        },
        async getMaps() {
            try {
                this.isLoading = true
                this.maps = await valorantService.getMaps()
            } catch (e) {
                console.log('error', e)
                this.isLoaded = true
            } finally {
                this.isLoading = false
                this.isLoaded = true
            }
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