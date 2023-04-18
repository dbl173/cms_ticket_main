import { EmailIcon, NotificationIcon } from 'components/Icons'
import React from 'react'
import "./AccountItem.scss"
import { Link } from 'react-router-dom'

const AccountItem: React.FC<{}> = () => {
  return (
    <div className='app__account-item'>
        <EmailIcon className="app__account-item__email-icon" size={24}/>
        <NotificationIcon className="app__account-item__notification-icon" size={24}/>
        <Link className="app__account-item__account-avatar" to={"/dashboard"}>
            <img src="https://i.pinimg.com/originals/a2/f6/4a/a2f64a1ac3ae01c910b4717efcacc2dd.jpg" alt="Meo Cry" />
        </Link>
    </div>
  )
}

export default AccountItem