import React from 'react'
import "./Chart.scss"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({ title, data, dataKey, grid }) {
    return (
        <div className='chart-container'>
            <h3>{title}</h3>
            <div className='rechart-container'>
                <ResponsiveContainer width="100%" aspect={4}>
                    <LineChart width={800} height={250} data={data}>
                        <Line type="monotone" dataKey={dataKey} stroke="#5550bd" strokeWidth={2} />
                        <XAxis dataKey="name" stroke='#5550bd' />
                        {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="17" />}
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
