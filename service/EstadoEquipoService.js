import axios from 'axios'

const url = import.meta.env.VITE_URL_API


const EstadoEquipo = {

    getall: () => {
        return axios.get(url+'/estado/select')
    }

}


export default EstadoEquipo