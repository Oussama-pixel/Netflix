import axios from "axios";
import { loginStart, loginFail, loginSuccess } from './AuthAction';

export const login = async (user,dispatch)=>{
    dispatch(loginStart());
    try {
        const {data} = await axios.post("auth/login",user);
        data.isAdmin && dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(loginFail())
    }
}