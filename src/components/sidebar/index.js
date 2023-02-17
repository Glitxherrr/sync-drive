import React from 'react'
import '../../styles/Sidebar.css'

import NewFile from './NewFile'
import SidebarItem from './SidebarItem';

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import StorageIcon from '@material-ui/icons/Storage';

const index = () => {
    return (
        <div className='sidebar'>
            <NewFile />

            
        </div>
    )
}

export default index
