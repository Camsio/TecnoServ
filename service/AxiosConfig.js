import axios from 'axios'

const axiosMethod = (params) =>{

    let token = "";
  
    if (typeof window !== "undefined") {
      token = localStorage.getItem("token");
    }
  
    axios.defaults.headers.common['token'] = token
    
    axios.interceptors.request.use(config=>{
      if (typeof window !== "undefined") {
        token = localStorage.getItem("token");
      }
      axios.defaults.headers.common['token'] = token
      return config;
    }, err=> {
      console.log(err)
    });


    axios.interceptors.response.use(resp=>{
        if(resp?.data.error){
            //alert(resp.data.error)
            params.navigate("/")
        }else{
            return resp
        }
    })
  }
  
    
  export default axiosMethod