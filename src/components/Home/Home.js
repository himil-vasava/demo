import React from 'react';
import './Home.css';
import roles from '../../data/Roles';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <RssFeedIcon className="selected" />
                <div className="selectedtitle">Permissions</div>  
                <ViewModuleOutlinedIcon />Approval Matrix
            </div>
            <hr />
            <div style={{display:'flex'}}>
            <button>Add Role</button>
            <CreateOutlinedIcon />
            <DeleteOutlineOutlinedIcon />
            </div>
            <div>
            <table>
            <tr>
                <th>Department/Role Name</th>
                <th>Access Level</th>
                <th>No. of members</th>
                <th>Last Updated</th>
                <th></th>
            </tr>
            {roles.map((role) => (
                <tr>
                    <Link to='/management' style={{ textDecoration: 'none' }} ><td>{role.Department}</td></Link>
                    <td>{role.Access}</td>
                    <td>{role.Members}</td>
                    <td>{role.Updated}</td>
                </tr>
            ))}
            </table>
            </div>
        </div>
    );
}

export default Home;