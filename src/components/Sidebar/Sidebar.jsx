import React from 'react'
import { Link, NavLink } from 'react-router-dom'
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
                    <Link to="/">
                        <li className='sidebar__item sidebar__item--active'>
                            <LineStyle className='sidebar__icon' />
                            <span>Home</span>
                        </li>
                    </Link>
                    <Link to="/">
                        <li className='sidebar__item'>
                            <TimeLine className='sidebar__icon' />
                            <span>Analytics</span>
                        </li>
                    </Link>
                    <Link to="/">
                        <li className='sidebar__item'>
                            <TrendingUp className='sidebar__icon' />
                            <span>Sales</span>
                        </li>
                    </Link>
                </ul>
            </div>


            <div className="sidebar__menu-item">
                <h3 className="sidebar__title">Quick Menu</h3>
                <ul className='sidebar__menu'>
                    <Link to="/users">
                        <li className='sidebar__item'>
                            <PermIdentity className='sidebar__icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/new-users">
                        <li className='sidebar__item'>
                            <PermIdentity className='sidebar__icon' />
                            <span>New Users</span>
                        </li>
                    </Link>
                    <Link to="/products">
                        <li className='sidebar__item'>
                            <Storefront className='sidebar__icon' />
                            <span>Products</span>
                        </li>
                    </Link>
                    <Link to="/">
                        <li className='sidebar__item'>
                            <AttachMoney className='sidebar__icon' />
                            <span>Transactions</span>
                        </li>
                    </Link>
                    <Link to="/">
                        <li className='sidebar__item'>
                            <BarChart className='sidebar__icon' />
                            <span>Reports</span>
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="sidebar__menu-item">
                <h3 className="sidebar__title">Notifications</h3>
                <ul className='sidebar__menu'>
                    <Link to="/">
                        <li className='sidebar__item'>
                            <MailOutline className='sidebar__icon' />
                            <span>Mail</span>
                        </li>
                    </Link>
                    <Link to="/">
                        <li className='sidebar__item'>
                            <DynamicFeed className='sidebar__icon' />
                            <span>Feedback</span>
                        </li>
                    </Link>
                    <Link to="/">
                        <li className='sidebar__item'>
                            <ChatBubbleOutline className='sidebar__icon' />
                            <span>Message</span>
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="sidebar__menu-item">
                <h3 className="sidebar__title">Staff</h3>
                <ul className='sidebar__menu'>
                    <Link to="/">
                        <li className='sidebar__item'>
                            <WorkOutline className='sidebar__icon' />
                            <span>Manage</span>
                        </li>
                    </Link>
                    <Link to="/">
                        <li className='sidebar__item'>
                            <TimeLine className='sidebar__icon' />
                            <span>Analytics</span>
                        </li>
                    </Link>
                    <Link to="/">
                        <li className='sidebar__item'>
                            <Report className='sidebar__icon' />
                            <span>Reports</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
