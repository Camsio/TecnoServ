import axios from 'axios'

const url = import.meta.env.VITE_URL_API


const EquipoService = {
    getequipos: () => {
        return axios.get(url+'/computo/select')
    }
}

export default EquipoService