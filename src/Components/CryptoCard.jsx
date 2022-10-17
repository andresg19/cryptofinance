import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import Container from '@mui/material/Container'
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import './CryptoCard.modules.css'
const CryptoCard  = ({crypto}) => {
    return ( 
        <div className='cryptoData' >
             <TableContainer width={20}>
        <Table>
          <TableHead>
            <TableCell>Market Rank</TableCell>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Current Price</TableCell>
            <TableCell>Price Change 24hr</TableCell>
          </TableHead>
    
            
              <TableBody>
                <TableCell># {crypto.market_cap_rank}</TableCell>
                <TableCell><img src={crypto.image} alt="" width={25}/></TableCell>
                <TableCell>{crypto.name}</TableCell>
                <TableCell>{crypto.current_price}</TableCell>
                <TableCell>{crypto.price_change_24h}</TableCell>
              </TableBody>
            
         
          </Table>
          </TableContainer>
             <Sparklines className='spark' data={crypto.sparkline_in_7d.price} width={200} height={40}>
             <SparklinesLine color='blue' />
             <SparklinesReferenceLine type="mean" />
            </Sparklines> 
        </div>
     );
}
 
export default CryptoCard ;