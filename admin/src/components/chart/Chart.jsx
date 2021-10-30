import  './chart.scss'
import { ResponsiveContainer, LineChart, XAxis } from 'recharts';
import { Line } from 'recharts/lib/cartesian/Line';
import { Tooltip } from 'recharts/lib/component/Tooltip';
import { CartesianGrid } from 'recharts/lib/cartesian/CartesianGrid';
import { Legend } from 'recharts/lib/component/Legend';

export default function Chart({title,data,dataKey,grid}) {

    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip/>
                    {grid && 
                    <>
                        <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>
                        <Legend/>
                    </>
                    }
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
