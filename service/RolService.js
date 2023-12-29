import axios from 'axios'

const url = import.meta.env.VITE_URL_API


const RolService = {

    getall: () => {
        return axios.get(url+'/rol/select')
    }

}


export default RolService