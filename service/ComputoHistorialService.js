import axios from 'axios'

const url = import.meta.env.VITE_URL_API


const ComputoHistorialService = {

    getHistorial: (id_equipo) => {
        return axios.get(`${url}/computo/selectHistorial?idEquipo=${id_equipo}`)
    }

}


export default ComputoHistorialService