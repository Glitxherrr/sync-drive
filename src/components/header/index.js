import React from 'react'
import '../../styles/Header.css'

import GDriveLogo from '../../media/google-drive-logo.png'

import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import NewFile from '../sidebar/NewFile'

const index = ({ userPhoto, handleLogin }) => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={userPhoto} alt="User Photo" />
                <span>SyncDrive</span>
            </div>
            <NewFile />
           
            <button className="applogout" onClick={handleLogin}>Logout</button>
        </div>
    )
}

export default index;
