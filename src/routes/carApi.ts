import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:59343/Car",
    headers: {
        Authorization : `${localStorage.getItem("Authorization")}`,
        'Content-Type' : "application/json"
    },
    withCredentials: false
})
