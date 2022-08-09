// import axios from '../setup/axios'
import axios from 'axios'
import authHeader from './auth-header';
const API_URL = "http://localhost:9997/api/auth/";
// const register = (username, email, password) => {
//     return axios.post(API_URL + "signup", {
//         username,
//         email,
//         password,
//     });
// };
const login = async (username, password) => {
    const response = await axios
        // .post("/api/auth/signin", {
        .post(API_URL + "signin", {
            username,
            password,
        });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};
const logout = async (userId) => {
    localStorage.removeItem("user");
    const response = await axios
        // .post("/api/auth/signin", {
        .post(API_URL + "logout", {
            userId
        });

    // if (response.data.accessToken) {
    //     localStorage.setItem("user", JSON.stringify(response.data));
    // }
    return response.data;
};
// const logout = () => {
//     localStorage.removeItem("user");

// };
const getPublicContent = () => {
    return axios.get(API_URL + "/api/test/all");
};
const getUserBoard = () => {
    return axios.get("/api/test/user", { headers: authHeader() });
};
const getAdminBoard = () => {
    return axios.get("http://localhost:9997/api/test/admin", { headers: authHeader() });
};
export default {
    // register,
    login,
    logout,
    getPublicContent,
    getUserBoard,
    getAdminBoard,
};