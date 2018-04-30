import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart =(props) => {
       // console.log(props);
        return (
            <div className='earthquake-charts' style={{ 'color': 'white' }}>
                <ResponsiveContainer width="60%" height={400}>
                    <LineChart data={props.ChartData}>
                        <XAxis />
                        <YAxis />
                        <CartesianGrid strokeDasharray="5 5" />
                        <Tooltip cursor={{ stroke: 'white', strokeWidth: 2 }} />
                        <Legend iconSize={20} />
                        <Line type="monotone" dataKey="magnitude" stroke="#4CAF50" />
                    </LineChart>                   
                </ResponsiveContainer>
            </div>
        )
}


export default Chart;