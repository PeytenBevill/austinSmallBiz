// components/Listing.jsx
import * as React from 'react';
import cookie from 'cookie';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { Button } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export function TableLabel() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 230 }}>Name</TableCell>
            <TableCell sx={{ width: 710 }} align="left">
              Description
            </TableCell>
            <TableCell sx={{ width: 230 }} align="center">
              Hours
            </TableCell>
            <TableCell align="left">Address</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}

export default function Listing(props) {
  const cookies = cookie.parse(document.cookie);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <Link to={`/${props.bizName}`}>
                <TableCell
                  sx={{ width: 330, textDecoration: 'underline' }}
                  component="th"
                  scope="row"
                >
                  {props.bizName}
                </TableCell>
              </Link>
              <TableCell sx={{ width: 710 }}>{props.description}</TableCell>
              <TableCell sx={{ width: 230 }} align="right">
                {props.hours}
              </TableCell>
              <TableCell align="right">{props.address}</TableCell>
              <TableCell>
                {cookies.isLoggedIn && (
                  <Button
                    onClick={() => props.delete(props.bizName)}
                    sx={{ color: 'red' }}
                  >
                    X
                  </Button>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

    </>
  );
}
