import axios from 'axios'

const url = import.meta.env.VITE_URL_API


const EquipoService = {
    getequipos: () => {
        return axios.get(url+'/computo/selectUsuario')
    },
    addequipo: (data) => {
        return axios.post(url+'/computo/create', data)
    },
    updateequipo: (data) => {
        console.log("----------Paso final api")
        return axios.put(url+'/computo/update', data)
    }
}

export default EquipoService