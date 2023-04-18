import { EmailIcon, NotificationIcon } from 'components/Icons';
import React from 'react';
import './AccountItem.scss';
import { Link } from 'react-router-dom';

const AccountItem: React.FC<{}> = () => {
    return (
        <div className="app__account-item">
            <EmailIcon className="app__account-item__email-icon" size={24} />
            <NotificationIcon className="app__account-item__notification-icon" size={24} />
            <Link className="app__account-item__account-avatar" to={'/dashboard'}>
                <img
                    src={require('assets/account.png')}
                    alt=""
                    height={'100%'}
                    width={'100%'}
                    style={{ objectFit: 'cover' }}
                />
            </Link>
        </div>
    );
};

export default AccountItem;
