import { useRef } from 'react'
import { useState } from 'react'
import  './login.scss'

export default function Login() {

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
                    <input type="email" placeholder="Email or phone number" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Sign In</button>
                    <span>New to Netflix? <b>Sign up now.</b></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    )
}
