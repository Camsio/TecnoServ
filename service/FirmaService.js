import axios from 'axios'

const url = import.meta.env.VITE_URL_API


const FirmaService = {
    getall: () => {
        return axios.get(url+'/firma/select')
    },

    addFirma: (data) => {
        return axios.post(url+'/firma/create', data)
    },

    updateUser: (data) => {
        console.log("----------Paso final api")
        return axios.put(url+'/firma/update', data)
    }

}


export default FirmaService