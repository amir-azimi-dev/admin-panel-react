import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Sidebar.scss"

// icons
import LineStyle from '@mui/icons-material/LineStyle'
import TimeLine from '@mui/icons-material/TimeLine'
import TrendingUp from '@mui/icons-material/TrendingUp'
import PermIdentity from '@mui/icons-material/PermIdentity'
import Storefront from '@mui/icons-material/Storefront'
import AttachMoney from '@mui/icons-material/AttachMoney'
import BarChart from '@mui/icons-material/BarChart'
import MailOutline from '@mui/icons-material/MailOutline'
import DynamicFeed from '@mui/icons-material/DynamicFeed'
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline'
import WorkOutline from '@mui/icons-material/WorkOutline'
import Report from '@mui/icons-material/Report'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__menu-item">
                <h3 className="sidebar__title">Dashboard</h3>
                <ul className='sidebar__menu'>
                    <NavLink to="/" className={({ isActive }) => isActive ? "sidebar__item sidebar__item--active" : "sidebar__item"}>
                        <li>
                            <LineStyle className='sidebar__icon' />
                            <span>Home</span>
                        </li>
                    </NavLink>
                    <NavLink to="/analytics" className={({ isActive }) => isActive ? "sidebar__item sidebar__item--active" : "sidebar__item"}>
                        <li>
                            <TimeLine className='sidebar__icon' />
                            <span>Analytics</span>
                        </li>
                    </NavLink>
                    <NavLink to="/sales" className={({ isActive }) => isActive ? "sidebar__item sidebar__item--active" : "sidebar__item"}>
                        <li>
                            <TrendingUp className='sidebar__icon' />
                            <span>Sales</span>
                        </li>
                    </NavLink>
                </ul>
            </div>


            <div className="sidebar__menu-item">
                <h3 className="sidebar__title">Quick Menu</h3>
                <ul className='sidebar__menu'>
                    <NavLink to="/users" className={({ isActive }) => isActive ? "sidebar__item sidebar__item--active" : "sidebar__item"}>
                        <li>
                            <PermIdentity className='sidebar__icon' />
                            <span>Users</span>
                        </li>
                    </NavLink>
                    <NavLink to="/new-users" className={({ isActive }) => isActive ? "sidebar__item sidebar__item--active" : "sidebar__item"}>
                        <li>
                            <PermIdentity className='sidebar__icon' />
                            <span>New Users</span>
                        </li>
                    </NavLink>
                    <NavLink to="/products" className={({ isActive }) => isActive ? "sidebar__item sidebar__item--active" : "sidebar__item"}>
                        <li>
                            <Storefront className='sidebar__icon' />
                            <span>Products</span>
                        </li>
                    </NavLink>
                    <NavLink to="/transactions" className={({ isActive }) => isActive ? "sidebar__item sidebar__item--active" : "sidebar__item"}>
                        <li>
                            <AttachMoney className='sidebar__icon' />
                            <span>Transactions</span>
                        </li>
                    </NavLink>
                    <NavLink to="/reports" className={({ isActive }) => isActive ? "sidebar__item sidebar__item--active" : "sidebar__item"}>
                        <li>
                            <BarChart className='sidebar__icon' />
                            <span>Reports</span>
                        </li>
                    </NavLink>
                </ul>
            </div>

            <div className="sidebar__menu-item">
                <h3 className="sidebar__title">Notifications</h3>
                <ul className='sidebar__menu'>
                    <NavLink to="/mails" className={({ isActive }) => isActive ? "sidebar__item sidebar__item--active" : "sidebar__item"}>
                        <li>
                            <MailOutline className='sidebar__icon' />
                            <span>Mails</span>
                        </li>
                    </NavLink>
                    <NavLink to="/feedback" className={({ isActive }) => isActive ? "sidebar__item sidebar__item--active" : "sidebar__item"}>
                        <li>
                            <DynamicFeed className='sidebar__icon' />
                            <span>Feedback</span>
                        </li>
                    </NavLink>
                    <NavLink to="/message" className={({ isActive }) => isActive ? "sidebar__item sidebar__item--active" : "sidebar__item"}>
                        <li>
                            <ChatBubbleOutline className='sidebar__icon' />
                            <span>Message</span>
                        </li>
                    </NavLink>
                </ul>
            </div>

            <div className="sidebar__menu-item">
                <h3 className="sidebar__title">Staff</h3>
                <ul className='sidebar__menu'>
                    <NavLink to="/manage" className={({ isActive }) => isActive ? "sidebar__item sidebar__item--active" : "sidebar__item"}>
                        <li>
                            <WorkOutline className='sidebar__icon' />
                            <span>Manage</span>
                        </li>
                    </NavLink>
                    <NavLink to="/analytics" className={({ isActive }) => isActive ? "sidebar__item sidebar__item--active" : "sidebar__item"}>
                        <li>
                            <TimeLine className='sidebar__icon' />
                            <span>Analytics</span>
                        </li>
                    </NavLink>
                    <NavLink to="/reports" className={({ isActive }) => isActive ? "sidebar__item sidebar__item--active" : "sidebar__item"}>
                        <li>
                            <Report className='sidebar__icon' />
                            <span>Reports</span>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}
