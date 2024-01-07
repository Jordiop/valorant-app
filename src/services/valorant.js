const BASE_URL = 'https://eu.api.riotgames.com/val/content/v1/contents';
const api_token = "";

const valorantService = {
    getAgents: async function() {
        try {
            const response = await fetch(`${BASE_URL}?api_key=${api_token}`);
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error fetching agents:', error);
        }
    },

    getMaps: async function() {
        try {
            const response = await fetch(`${BASE_URL}?api_key=${api_token}`);
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error fetching maps:', error);
        }
    },

    getWeapons: async function() {
        try {
            const response = await fetch(`${BASE_URL}?api_key=${api_token}`);
            const data = await response.json();
            return data.equips;
        } catch (error) {
            console.error('Error fetching weapons:', error);
        }
    }
};

export default valorantService;
