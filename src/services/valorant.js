const api_url = import.meta.env.VITE_API_URL;
const api_token = import.meta.env.VITE_API_TOKEN;

const valorantService = {
    getAgents: async function() {
        try {
            const response = await fetch(`${api_url}?api_key=${api_token}`);
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error fetching agents:', error);
        }
    },

    getMaps: async function() {
        try {
            const response = await fetch(`${api_url}?api_key=${api_token}`);
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error fetching maps:', error);
        }
    },

    getWeapons: async function() {
        try {
            console.log(`${api_url}?api_key=${api_token}`)
            const response = await fetch(`${api_url}?api_key=${api_token}`);
            const data = await response.json();
            return data.equips;
        } catch (error) {
            console.error('Error fetching weapons:', error);
        }
    }
};

export default valorantService;
