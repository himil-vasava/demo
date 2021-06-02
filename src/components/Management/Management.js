import React, {useState} from 'react';
import './Management.css';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Managementdata from '../../data/Managementdata';
import {Link} from 'react-router-dom';
import TableManagement2 from '../TableManagement2/TableManagement2';

const Management = () => {
    const [expandedRows, setExpandedRows] = useState([]);
    const [expandState, setExpandState] = useState({});

    const handleEpandRow = (event, userId) => {
        const currentExpandedRows = expandedRows;
        const isRowExpanded = currentExpandedRows.includes(userId);
    
        let obj = {};
        isRowExpanded ? (obj[userId] = false) :  (obj[userId] = true);
        setExpandState(obj);
    
        // If the row is expanded, we are here to hide it. Hence remove
        // it from the state variable. Otherwise add to it.
        const newExpandedRows = isRowExpanded ?
              currentExpandedRows.filter(id => id !== userId) :
              currentExpandedRows.concat(userId);
    
        setExpandedRows(newExpandedRows);
    }
    return (
        <div>
            <div style={{display: 'flex'}}>
                <RssFeedIcon className="selected" />
                <div className="selectedtitle">Permissions</div>  
                <ViewModuleOutlinedIcon />Approval Matrix
            </div>
            <hr />
            <div style={{display:'flex'}}>
            Management Team
            <CreateOutlinedIcon />
            </div>
            <div style = {{display: 'flex'}}>
                <div className="selectedtitle">Access Control</div>
                <div>Assigned Members</div>
            </div>
            <TableManagement2 data={Managementdata} />
            {/*<table>
            <tr>
                <th>Department/Role Name</th>
                <th>Access Level</th>
                <th>No. of members</th>
                <th>Last Updated</th>
                <th></th>
            </tr>
            {Managementdata.map((role) => (
                <>
                <tr>
                    <button 
                        onClick={event => handleEpandRow(event, role.id)}>
                        {
                          expandState[role.id] ?
                            'Hide' : 'Show'
                        }
                        Expand</button>
                    <Link style={{ textDecoration: 'none' }} ><td>{role.Department}</td></Link>
                    <td>{role.Access}</td>
                    <td>{role.Summary}</td>
                    <td>{role.LastUpdated}</td>
                </tr>
                <>
                {
                  expandedRows.includes(role.id) ?
                  <div>
                      <p>All aspects in the {role.Department} module</p>
                      <div style={{display: 'flex'}}>
                          <div style={{display:'flex',flexDirection: 'column'}}>
                              <p>Access Control</p>
                                <div><input type="radio" name="all" />All Access</div>
                                <div><input type="radio" name="restricted" />Restricted Access</div>
                          </div>
                          <div style={{display:'flex',flexDirection: 'column'}}>
                              <p>Permissions</p>
                                <div><input type="checkbox" name="all" />View items in access</div>
                                <div><input type="checkbox" name="restricted" />Edit items in access</div>
                                <div><input type="checkbox" name="all" />Create items in access</div>
                                <div><input type="checkbox" name="restricted" />Delete items in access</div>
                          </div>
                      </div>
                  </div> : null
                }
                </>
                </>
            ))}
            </table>*/}
        </div>
    );
}

export default Management;