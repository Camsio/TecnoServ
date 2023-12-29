import axios from 'axios'

const url = import.meta.env.VITE_URL_API


const UbiService = {

    getall: () => {
        return axios.get(url+'/ubicacion/select')
    }

}


export default UbiService