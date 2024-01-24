import axios from 'axios'

const url = import.meta.env.VITE_URL_API


const Marca = {

    getall: () => {
        return axios.get(url+'/marca/select')
    }

}


export default Marca