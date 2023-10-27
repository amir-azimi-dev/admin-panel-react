import React from 'react'

// icons
import NotificationsIcon from '@mui/icons-material/Notifications'
import LanguageIcon from '@mui/icons-material/Language'
import SettingsIcon from '@mui/icons-material/Settings';

import "./Topbar.scss"

export default function Topbar() {
    return (
        <div className='topbar'>
            <h2 className="logo"><a href="#">Admin-Panel</a></h2>
            <div className="right-side">
                <div className="icon-container">
                    <NotificationsIcon style={{fontSize: "1.7rem"}} />
                    <span className="badge">25</span>
                </div>
                <div className="icon-container">
                    <LanguageIcon style={{fontSize: "1.7rem"}} />
                    <span className="badge">25</span>
                </div>
                <div className="icon-container">
                    <SettingsIcon style={{fontSize: "1.7rem"}} />
                </div>
                <div className="profile-container">
                    <img src="/profile.webp" alt="profile-photo" />
                </div>
            </div>
        </div>
    )
}
