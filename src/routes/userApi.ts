import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:59347/User",
    headers: {
        Authorization : `${localStorage.getItem("Authorization")}`,
        'Content-Type' : "application/json"
    },
    withCredentials: false
})
