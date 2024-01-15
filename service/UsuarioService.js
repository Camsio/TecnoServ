import axios from 'axios'

const url = import.meta.env.VITE_URL_API


const UsuarioService = {
    login: (data) => {
        return axios.post(url+'/usuario/validacion-login', data)
    },

    getall: () => {
        return axios.get(url+'/usuario/select')
    },

    addUser: (data) => {
        return axios.post(url+'/usuario/create', data)
    },

    updateUser: (data) => {
        console.log("----------Paso final api")
        return axios.put(url+'/usuario/update', data)
    }

}


export default UsuarioService