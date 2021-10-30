import './home.scss'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import {userData} from '../../DummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home() {
    const MONTHS = useMemo(()=>[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]);
      const [userStats, setUserStats] = useState([])
      useEffect(()=>{
        const getStats= async ()=>{
          try {
            const {data} = await axios.get("users/stats",{
              headers:{
                token:"Bearer "
              }
            }) 
            const statsList = data.sort((a,b)=>{
                return a._id - b._id;
            })
            statsList.map(item=>setUserStats(prev=>[...prev,{name:MONTHS[item.id-1],"New User":item.total}]))
          } catch (error) {
            console.log(error);
          }
        getStats()
      }},[MONTHS])
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userStats} title='User Analytics' grid dataKey='New User'/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>                
            </div>
        </div>
    )
}
