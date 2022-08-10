import axios from "axios";
// import { toast } from "react-toastify";

// Set config defaults when creating the instance
const instance = axios.create({
    // baseURL: 'http://localhost:8080'
    // baseURL: process.env.REACT_APP_BACKEND_URL,
    baseURL: "http://localhost:9997/api",
    headers: {
        "Content-Type": "application/json",
    },
});
export default instance