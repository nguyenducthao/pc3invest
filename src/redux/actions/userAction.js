import {
    // REGISTER_SUCCESS,
    // REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./types";
import UserService from "../../components/services/userService";
import { toast } from "react-toastify";
// export const register = (username, email, password) => (dispatch) => {
//     return UserService.register(username, email, password).then(
//         (response) => {
//             dispatch({
//                 type: REGISTER_SUCCESS,
//             });
//             dispatch({
//                 type: SET_MESSAGE,
//                 payload: response.data.message,
//             });
//             return Promise.resolve();
//         },
//         (error) => {
//             const message =
//                 (error.response &&
//                     error.response.data &&
//                     error.response.data.message) ||
//                 error.message ||
//                 error.toString();
//             dispatch({
//                 type: REGISTER_FAIL,
//             });
//             dispatch({
//                 type: SET_MESSAGE,
//                 payload: message,
//             });
//             return Promise.reject();
//         }
//     );
// };
export const login = (username, password) => (dispatch) => {
    return UserService.login(username, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });
            return Promise.resolve();
        },
        (error) => {
            // console.log('error: ', error)
            // console.log('error.response: ', error.response)
            // console.log('error.response.data: ', error.response.data)
            // console.log('error.response.data.message: ', error.response.data.message)
            // console.log('error.message: ', error.message)
            // console.log('error.toString(): ', error.toString())
            if (error.response.data.message === 'Bad credentials') {
                toast.error('Tên đăng nhập hoặc mật khẩu không đúng!')
            }
            else {
                if (error) {
                    toast.error('Chương trình xảy ra lỗi. Vui lòng liên hệ quản trị!')
                }
            }
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            dispatch({
                type: LOGIN_FAIL,
            });

            return Promise.reject();
        }
    );
};
export const logout = (userId) => (dispatch) => {
    return UserService.logout(userId).then(
        (data) => {
            dispatch({
                type: LOGOUT,
                // payload: { user: data },
            });
            return Promise.resolve();
        },
        (error) => {
            // console.log('error: ', error)
            // console.log('error.response: ', error.response)
            // console.log('error.response.data: ', error.response.data)
            // console.log('error.response.data.message: ', error.response.data.message)
            // console.log('error.message: ', error.message)
            // console.log('error.toString(): ', error.toString())
            // if (error.response.data.message === 'Bad credentials') {
            //     toast.error('Tên đăng nhập hoặc mật khẩu không đúng!')
            // }
            // else {
            //     if (error) {
            //         toast.error('Chương trình xảy ra lỗi. Vui lòng liên hệ quản trị!')
            //     }
            // }
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            dispatch({
                type: LOGOUT,
            });

            return Promise.reject();
        }
    );
};
// export const logout = () => (dispatch) => {
//     UserService.logout();
//     dispatch({
//         type: LOGOUT,
//     });
// };