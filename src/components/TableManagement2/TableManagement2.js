import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Grid, Radio, Typography } from '@material-ui/core';
import { VisibilityOutlined } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#F2F2F2',
        color: theme.palette.common.black,
        fontWeight: 700,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#FFF',
        },
        '&:hover': {
            backgroundColor: '#FFF',
        },
    },
}))(TableRow);

const useStyles = theme => ({
    root: {},
    table: {
        marginTop: 10,
        width: '100%',
    },
    text: {
        marginTop: 20,
        color: '#fff'
    }
})

function createData(index, id, Department, Access, Summary, LastUpdated) {
    return { index, id, Department, Access, Summary, LastUpdated };
}

class TableManagement2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rows: [],
            expandedRows: [],
            expandState: {}
        }
    }

    componentDidMount() {
        const r = this.props.data.map((el, index) => (
            createData(index, el.id, el.Department, el.Access, el.Summary, el.LastUpdated)
        ))
        this.setState({ rows: r });
    }

    handleExpandRow = (event, userId) => {
        const currentExpandedRows = this.state.expandedRows;
        const isRowExpanded = currentExpandedRows.includes(userId);

        let obj = {};
        isRowExpanded ? (obj[userId] = false) :  (obj[userId] = true);
        this.setState({expandState: obj});
    
        // If the row is expanded, we are here to hide it. Hence remove
        // it from the state variable. Otherwise add to it.
        const newExpandedRows = isRowExpanded ?
              currentExpandedRows.filter(id => id !== userId) :
              currentExpandedRows.concat(userId);
    
        this.setState({expandedRows:newExpandedRows});
    }

    render() {
        console.log(this.state.expandedRows);
        const { classes } = this.props;
        return (
            <>
                <Grid container direction="column" alignContent='center' alignItems='center' style={{ marginTop: 20, paddingLeft: 60, paddingRight: 60 }}>
                    <TableContainer component={Paper} className={classes.table}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center"></StyledTableCell>
                                    <StyledTableCell align="center">Department/Role Name</StyledTableCell>
                                    <StyledTableCell align="center">Access Level</StyledTableCell>
                                    <StyledTableCell align="center">Summary</StyledTableCell>
                                    <StyledTableCell align="center">Last Updated</StyledTableCell>
                                    <StyledTableCell align="center"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.rows.map(row => (
                                    <>
                                    <StyledTableRow key={row.index}>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    cursor: 'default',
                                                    fontWeight: 600,
                                                    fontSize: 12,
                                                }} variant="outlined"
                                                onClick={event => this.handleExpandRow(event, row.id)}>
                                                {
                                                  this.state.expandState[row.id] ?
                                                    '-' : '+'
                                                }
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row" align="center">
                                        <Link key={row.index} to={`/department/${row.index}`}>
                                                {row.Department}
                                        </Link>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                style={{
                                                    borderRadius: 30, cursor: 'default',
                                                    backgroundColor: (row.Access == "All Access" ? "#BEE7CF" : "#FFB5B5"),
                                                    color: (row.Access == "All Access" ? "#69C690" : "#FF4848"),
                                                    fontWeight: 600,
                                                    border: (row.Access == "All Access" ? "2px solid #78CC9C" : "2px solid #FF4646"),
                                                    fontSize: 12
                                                }} variant="outlined">
                                                {row.Access}
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {row.Summary}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {row.LastUpdated}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <VisibilityOutlined style={{ color: '#868686' }} />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow>
                                    <StyledTableCell />
                                        {
                                        this.state.expandedRows.includes(row.id) ?
                                        <div>
                                            <h3>All aspects in the {row.Department} module</h3>
                                            <div style={{display: 'flex'}}>
                                                <StyledTableCell>
                                                <div style={{display:'flex',flexDirection: 'column'}}>
                                                    <p>Access Control</p>
                                                        <div><input type="radio" name="all" />All Access</div>
                                                        <div><input type="radio" name="restricted" />Restricted Access</div>
                                                </div>
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                <div style={{display:'flex',flexDirection: 'column'}}>
                                                    <p>Permissions</p>
                                                        <div><input type="checkbox" name="all" />View items in access</div>
                                                        <div><input type="checkbox" name="restricted" />Edit items in access</div>
                                                        <div><input type="checkbox" name="all" />Create items in access</div>
                                                        <div><input type="checkbox" name="restricted" />Delete items in access</div>
                                                </div>
                                                </StyledTableCell>
                                            </div>
                                        </div> : null
                                        }
                                        </StyledTableRow>
                                    </>
                                )
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </>
        )
    }
}


export default withStyles(useStyles, { withTheme: true })(TableManagement2)
