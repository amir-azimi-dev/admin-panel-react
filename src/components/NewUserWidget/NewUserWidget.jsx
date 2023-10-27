import React from 'react'
import "./NewUserWidget.scss"
import { newMembersData } from "../../data"


// icons
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function NewUserWidget() {
    return (
        <div className='new-users'>
            <h3 className='new-user__title'>New Joined Members</h3>
            <ul className="new-user__list">
                {newMembersData.map(newUserData => (
                    <li key={newUserData.id} className="new-user__item">
                        <div className="new-user__wrapper">
                            <img src={newUserData.img} alt="user-photo" className="new-user__img" />
                            <div className="new-user__information">
                                <span className='new-user__name'>{newUserData.name}</span>
                                <span className='new-user__role'>{newUserData.role}</span>
                            </div>
                        </div>
                        <button className="new-user__visibility-btn">
                            <VisibilityIcon className='new-user__icon' />
                        </button>
                    </li>
                ))}
            </ul>
        </div >
    )
}