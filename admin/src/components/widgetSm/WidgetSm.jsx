import { Visibility } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import  './widgetSm.scss'
import axios from "axios";
export default function WidgetSm() {
     const [newUsers, setNewUsers] = useState([])

     useEffect(()=>{
        const getNewUsers = async ()=>{
            try {
                const {data} = await axios.get("/users?new=true",{
                    headers:{
                        token:"Bearer "
                    }
                });                
                setNewUsers(data)
            } catch (error) {
                console.log(error);
            }
        }
        getNewUsers();
     },[])
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUsers.map(user=>(
                    <li className="widgetSmListItem">
                        <img src={user.profilePic||"/images/defaultImg.png"} alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">
                                {user.username}
                            </span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon"/>
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
