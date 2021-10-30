import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"
import { logout } from '../../authContext/AuthAction'
import { AuthContext } from '../../authContext/AuthContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const {dispatch} = useContext(AuthContext)
    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset===0?false:true)
        return ()=>window.onscroll = null;
    }
    return (
        <div className={isScrolled?"navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="/images/Netflix-page-logo.png" alt="" />
                    <Link to="/" className="link">
                        <span>Homepage</span>
                    </Link>
                    <Link to="/series" className="link">
                        <span className="navbarMainLinks">Series</span>
                    </Link>
                    <Link to="/movies"className="link">
                        <span className="navbarMainLinks">Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="/images/myImg.png" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon"/> 
                        <div className="options">
                            <span>Setting</span>
                            <span onClick={()=>dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
