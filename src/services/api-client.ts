import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '40037f6646da4d65a72f39d8dec18e2e'
    }
})