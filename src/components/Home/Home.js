import React from 'react';
import './Home.css';
import roles from '../../data/Roles';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import {Link} from 'react-router-dom';
import TableManagement from '../TableManagement/TableManagement';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const Home = () => {
    return (
        <div style={{ flex: '0.8' }}>
            <div style={{display: 'flex'}}>
                <RssFeedIcon className="selected" />
                <div className="selectedtitle" style={{ borderRight: "2px solid #DBDEE3", paddingRight: 10 }}>Permissions</div>  
                <ViewModuleOutlinedIcon style={{ marginLeft: 10 }}/>Approval Matrix
            </div>
            <hr />
            <div style={{display:'flex', marginTop: 30}}>
            <Button style={{ borderRadius: 10 }} variant="contained" color="primary"><Add style={{ marginRight: 5 }} />Add Role</Button>
            <CreateOutlinedIcon style={{ marginLeft: 20, color: '#868686' }}/>
            <DeleteOutlineOutlinedIcon style={{ marginLeft: 20, color: '#868686' }}/>
            </div>
            <TableManagement data={roles} />
        </div>
    );
}

export default Home;