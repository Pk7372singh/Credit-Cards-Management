// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// const CreditCardTable = ({ cards, onEdit, onDelete }) => {
//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Id</TableCell>
//             <TableCell>Bank Name</TableCell>
//             <TableCell>Credit Card Name</TableCell>
//             <TableCell>Enabled</TableCell>
//             <TableCell>Created At</TableCell>
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {cards.map((card) => (
//             <TableRow key={card.id}>
//               <TableCell>{card.id}</TableCell>
//               <TableCell>{card.bankName}</TableCell>
//               <TableCell>{card.creditCardName}</TableCell>
//               <TableCell>{card.enabled ? 'Yes' : 'No'}</TableCell>
//               <TableCell>{card.createdAt}</TableCell>
//               <TableCell>
//                 <Button variant="contained" color="primary" onClick={() => onEdit(card)}>
//                   Edit
//                 </Button>
//                 <Button variant="contained" color="secondary" onClick={() => onDelete(card.id)}>
//                   Delete
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default CreditCardTable;
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const CreditCardTable = ({ cards, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Bank Name</TableCell>
            <TableCell>Credit Card Name</TableCell>
            <TableCell>Enabled</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cards.map((card) => (
            <TableRow key={card._id}>
              <TableCell>{card._id}</TableCell>
              <TableCell>{card.bankName}</TableCell>
              <TableCell>{card.creditCardName}</TableCell>
              <TableCell>{card.enabled ? "Yes" : "No"}</TableCell>
              <TableCell>{card.createdAt}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onEdit(card)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onDelete(card._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CreditCardTable;
