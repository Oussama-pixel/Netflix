import React, { useEffect, useState } from 'react'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"
import List from '../../components/list/List';
import axios from "axios";
const Home = ({type}) => {
    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)
    useEffect(()=>{
        const getRandomLists = async ()=>{
            try {
                const {data} = await axios.get(`lists${type ? "?type="+type:""}&${genre? "genre="+ genre: ""}`,{
                    headers:{
                        token : "Bearer: "
                    }
                })
                setLists(data)
            } catch (error) {
                console.log(error);
            }
        }
        getRandomLists();
    },[type,genre])
    return (
        <div className="home">
            <Navbar/>
            <Featured type={type} setGenre={setGenre}/>            
            {
                lists.map(list=>(
                    <List list={list}/>
                ))
            }
        </div>
    )
}

export default Home
