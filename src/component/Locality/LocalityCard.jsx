import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import './css/LocalityCard.css'


export default function LocalityCard() {
  return (
    <TableContainer id='table'component={Paper}>
      <Table >
        <TableRow >
            <TableCell >Dombivli East</TableCell>
            <TableCell ><Rating readOnly defaultValue={4.5} precision={0.5} /></TableCell>
        </TableRow>
        <TableRow >
            <TableCell >Buy: ₹ 5,674 Per Sq. Ft</TableCell>
            <TableCell  className='link'>Properties for Sale in Dombivli East</TableCell>
        </TableRow>
        <TableRow>
            <TableCell >Rent: ₹ 13 Per Sq. Ft</TableCell>
            <TableCell  className='link'>1763 Properties for Rent in Dombivli East</TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
}