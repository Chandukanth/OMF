import axios from "axios";
const API_URL = ""

const axiosClient = axios.create({
    baseURL: API_URL,
    timeout: 50000,
    headers: {
        "Content-Type": "application/json",
        common: {
            Authorization: "",
        },
    },
});

class ApiClient {

    static async post(url, body) {
        try {
            const response = await axiosClient.post(url, body).catch((error) => {
                console.error(error)
            })
            return response;

        } catch (error) {
            console.log(error)

        }

    }

    static async get(url) {
        try {
            const response = await axiosClient.get(url).catch((error) => {
                console.error(error)
            })
            return response

        } catch (error) {
            console.log(error);

        }
    }
    static async delete(url) {
        try {
            const response = await axiosClient.delete(url).catch((error) => {
                console.error(error)
            })
            return response

        } catch (error) {
            console.log(error);

        }
    }

    static async put(url, body){
        try {
            const response = await axiosClient.put(url, body).catch((error)=>{
                console.error(error)
            })
            return response
            
        } catch (error) {
            console.log(error);
            
        }

    }

    static async patch(url, body){
        try {
            const response = await axiosClient.patch(url, body).catch((error)=>{
                console.error(error)
            })
            return response
            
        } catch (error) {
            console.log(error);
        }
    }

}
export default ApiClient