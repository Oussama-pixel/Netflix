import axios from 'axios'
import { useRef } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import  './register.scss'

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const emailRef = useRef()
    const passwordRef = useRef()
    const usernameRef = useRef();
    const history = useHistory();
    const handleStart = ()=>{
        setEmail(emailRef.current.value)
    }
    const handleFinish = async (e)=>{
        e.preventDefault()
        setPassword(passwordRef.current.value)
        setUsername(usernameRef.current.value)
        try {
            await axios.post("/auth/register",{email,username,password});
            history.push("/login")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="register">
            <img src="/images/netflix-signup-background-img.png" alt="" className="registerBackgroundImg" />
            <div className="top">
                <div className="wrapper">
                    <img src="/images/Netflix-page-logo.png" alt="" className="logo" />
                    <button className="loginButton" onClick={()=>history.push("/login")}>
                        Sign In
                    </button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {!email?(
                <div className="input">
                    <input type="email" placeholder="email address" required ref={emailRef}/>
                    <button className="registerButton" onClick={handleStart}>Get Started</button>
                </div>
                ):(
                <form className="input">
                    <input type="password" placeholder="password" required ref={passwordRef}/>
                    <input type="text" placeholder="username" required ref={usernameRef}/>
                    <button className="registerButton" onClick={handleFinish}> Start</button>
                </form>    
                )}
            </div>
        </div>
    )
}
