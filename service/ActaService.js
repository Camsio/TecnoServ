import axios from 'axios'

const url = import.meta.env.VITE_URL_API


const ActaService = {

    getActa: (id_equipo) => {
        return axios.get(`${url}/computo/acta?idEquipo=${id_equipo}`)
    }

}


export default ActaService