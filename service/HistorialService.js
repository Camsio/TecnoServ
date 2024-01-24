import axios from 'axios'

const url = import.meta.env.VITE_URL_API


const HistorialService = {
    getHistorial: () => {
        return axios.get(url+'/historial/select')
    },
    addHistorial: (data) => {
        return axios.post(url+'/historial/create', data)
    }
}

export default HistorialService