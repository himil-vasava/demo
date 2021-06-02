import React from 'react';
import './SideBar.css';
import SideBarRow from '../SideBarRow/SideBarRow';
import SecurityIcon from '@material-ui/icons/Security';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

const SideBar =  () => {
    return (
        <div className='sidebar'>
            <SideBarRow Icon={DashboardOutlinedIcon} title="Projects" />
            <SideBarRow Icon={BusinessCenterOutlinedIcon} title="Organisation Profile" />
            <SideBarRow selected Icon={SecurityIcon} title="Access Control" />
        </div>
    );
}

export default SideBar;