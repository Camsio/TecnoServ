import axios from 'axios'

const url = import.meta.env.VITE_URL_API


const TipoEquipo = {

    getall: () => {
        return axios.get(url+'/tipoEquipo/select')
    }

}


export default TipoEquipo