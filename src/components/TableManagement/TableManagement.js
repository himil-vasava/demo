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

function createData(index, Department, Access, Members, Updated) {
    return { index, Department, Access, Members, Updated };
}

class TableManagement extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rows: []
        }
    }

    componentDidMount() {
        const r = this.props.data.map((el, index) => (
            createData(index, el.Department, el.Access, el.Members, el.Updated)
        ))
        this.setState({ rows: r });
    }
    render() {
        const { classes } = this.props;
        return (
            <>
                <Grid container direction="column" alignContent='center' alignItems='center' style={{ marginTop: 20, paddingLeft: 60, paddingRight: 60 }}>
                    <TableContainer component={Paper} className={classes.table}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">Department/Role Name</StyledTableCell>
                                    <StyledTableCell align="center">Access Level</StyledTableCell>
                                    <StyledTableCell align="center">No. of members</StyledTableCell>
                                    <StyledTableCell align="center">Last Updated</StyledTableCell>
                                    <StyledTableCell align="center"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.rows.map(row => (
                                    <StyledTableRow key={row.index}>
                                        <Link key={row.index} to={`/department`}>
                                            <StyledTableCell component="th" scope="row" align="center">
                                                {row.Department}
                                            </StyledTableCell>
                                        </Link>
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
                                            {row.Members}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {row.Updated}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <VisibilityOutlined style={{ color: '#868686' }} />
                                        </StyledTableCell>
                                    </StyledTableRow>
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


export default withStyles(useStyles, { withTheme: true })(TableManagement)
