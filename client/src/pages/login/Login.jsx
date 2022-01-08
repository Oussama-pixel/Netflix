import { useContext } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router';
import { login } from '../../authContext/apiCalls';
import { AuthContext } from '../../authContext/AuthContext';
import  './login.scss'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const {dispatch} = useContext(AuthContext);
    const history = useHistory();
    const handleLogin = (e)=>{
        e.preventDefault();
        login({email,password},dispatch)
    }
    return (
        <div className="login">
            <img src="/images/netflix-signup-background-img.png" alt="" className="loginBackgroundImg" />
            <div className="top">
                <div className="wrapper">
                    <img src="/images/Netflix-page-logo.png" alt="" className="logo" />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or phone number" onChange={e=>setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
                    <button className="loginButton" onClick={e=>handleLogin(e)}>Sign In</button>
                    <span>New to Netflix? <b onClick={()=>history.push("/register")}>Sign up now.</b></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    )
}
