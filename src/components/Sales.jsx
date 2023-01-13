import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const oldSales = [
    {
        "represented": "Seller",
        "sold_date": "11/21/2022",
        "price": "$215,000",
        "zpid": 43939779,
        "image_url": "https://photos.zillowstatic.com/fp/c223fdaf2635e388ca3982ce95e8f0f9-p_b.jpg",
        "image_alt": "6070 W 19th Ave APT 205, Hialeah, FL, 33012",
        "home_details_url": "https://www.zillow.com/homedetails/6070-W-19th-Ave-APT-205-Hialeah-FL-33012/43939779_zpid/",
        "street_address": "6070 W 19th Ave APT 205",
        "city_state_zipcode": "Hialeah, FL, 33012",
        "latitude": 25.878172,
        "longitude": -80.32177
    },
    {
        "represented": "Buyer",
        "sold_date": "10/20/2022",
        "price": "$465,000",
        "zpid": 2111186241,
        "image_url": "https://photos.zillowstatic.com/fp/a98abba246e08db0d45f46e0e5dc8704-p_b.jpg",
        "image_alt": "929 SW 153rd Path #929, Miami, FL, 33194",
        "home_details_url": "https://www.zillow.com/homedetails/929-SW-153rd-Path-929-Miami-FL-33194/2111186241_zpid/",
        "street_address": "929 SW 153rd Path #929",
        "city_state_zipcode": "Miami, FL, 33194",
        "latitude": 25.75819,
        "longitude": -80.44409
    },
    {
        "represented": "Seller",
        "sold_date": "10/12/2022",
        "price": "$780,000",
        "zpid": 59747136,
        "image_url": "https://photos.zillowstatic.com/fp/bc761e55014ace7b75f68c7543323a8d-p_b.jpg",
        "image_alt": "15274 SW 36th Ter, Miami, FL, 33185",
        "home_details_url": "https://www.zillow.com/homedetails/15274-SW-36th-Ter-Miami-FL-33185/59747136_zpid/",
        "street_address": "15274 SW 36th Ter",
        "city_state_zipcode": "Miami, FL, 33185",
        "latitude": 25.733013,
        "longitude": -80.44148
    },
    {
        "represented": "Seller",
        "sold_date": "8/3/2022",
        "price": "$420,000",
        "zpid": 72572283,
        "image_url": "https://photos.zillowstatic.com/fp/ca020a559692cc67b67dabdfbae76cdd-p_b.jpg",
        "image_alt": "3250 Grand Ave APT 306, Miami, FL, 33133",
        "home_details_url": "https://www.zillow.com/homedetails/3250-Grand-Ave-APT-306-Miami-FL-33133/72572283_zpid/",
        "street_address": "3250 Grand Ave APT 306",
        "city_state_zipcode": "Miami, FL, 33133",
        "latitude": 25.727688,
        "longitude": -80.24602
    },
    {
        "represented": "Seller",
        "sold_date": "7/1/2022",
        "price": "$130,000",
        "zpid": 43245925,
        "image_url": "https://photos.zillowstatic.com/fp/19921a910860a3d46f2bdce19f19ff47-p_b.jpg",
        "image_alt": "101 SW 132nd Way APT 405J, Hollywood, FL, 33027",
        "home_details_url": "https://www.zillow.com/homedetails/101-SW-132nd-Way-APT-405J-Hollywood-FL-33027/43245925_zpid/",
        "street_address": "101 SW 132nd Way APT 405J",
        "city_state_zipcode": "Hollywood, FL, 33027",
        "latitude": 26.006632,
        "longitude": -80.323364
    }
]


export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell align="right">Sold date</TableCell>
            <TableCell align="right">Closing price</TableCell>
            <TableCell align="right">Represented</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {oldSales.map((row) => (
            <TableRow
              key={row.zpid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.image_alt}
              </TableCell>
              <TableCell align="right">{row.sold_date}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.represented}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}