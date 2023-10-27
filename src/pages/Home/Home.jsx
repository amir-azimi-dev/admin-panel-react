import React from 'react'
import "./Home.scss"
import {chartData} from "../../data"

// components
import Feature from '../../components/Features/Features'
import Chart from '../../components/Chart/Chart'
import NewUserWidget from '../../components/NewUserWidget/NewUserWidget'
import RecentTransactions from '../../components/RecentTransactions/RecentTransactions'


export default function Home() {
  return (
    <div className='home'>
      <Feature />
      <Chart title="User Analytics" data={chartData} dataKey="sale" grid />
      <div className="home__widgets">
        <NewUserWidget />
        <RecentTransactions />
      </div>
    </div>
  )
}
