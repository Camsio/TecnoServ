import axios from 'axios'

const url = import.meta.env.VITE_URL_API


const AreaService = {

    getall: () => {
        return axios.get(url+'/area/select')
    }

}


export default AreaService