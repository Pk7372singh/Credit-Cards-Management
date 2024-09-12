// import React, { useState, useEffect } from "react";
// import {
//   TextField,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Switch,
//   FormControlLabel,
// } from "@mui/material";

// const CreditCardForm = ({ onSave, editCard }) => {
//   const [id, setId] = useState("");
//   const [bankName, setBankName] = useState("");
//   const [cardName, setCardName] = useState("");
//   const [enabled, setEnabled] = useState(false);

//   useEffect(() => {
//     if (editCard) {
//       setId(editCard.id);
//       setBankName(editCard.bankName);
//       setCardName(editCard.cardName);
//       setEnabled(editCard.enabled);
//     }
//   }, [editCard]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const createdAt = editCard ? editCard.createdAt : new Date().toISOString();
//     onSave({ id, bankName, cardName, enabled, createdAt });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         label="Id"
//         value={id}
//         onChange={(e) => setId(e.target.value)}
//         fullWidth
//         margin="normal"
//         required
//         disabled={!!editCard}
//       />
//       <FormControl fullWidth margin="normal" required>
//         <InputLabel>Bank Name</InputLabel>
//         <Select value={bankName} onChange={(e) => setBankName(e.target.value)}>
//           <MenuItem value="Bank A">Bank of India</MenuItem>
//           <MenuItem value="Bank B">Bank of Baroda</MenuItem>
//           <MenuItem value="Bank C">Union Bank</MenuItem>
//           <MenuItem value="Bank A">HDFC</MenuItem>
//           <MenuItem value="Bank B">Fedral vBank </MenuItem>
//           <MenuItem value="Bank C">Canara Bank</MenuItem>
//         </Select>
//       </FormControl>
//       <TextField
//         label="Credit Card Name"
//         value={cardName}
//         onChange={(e) => setCardName(e.target.value)}
//         fullWidth
//         margin="normal"
//         required
//       />
//       <FormControlLabel
//         control={
//           <Switch
//             checked={enabled}
//             onChange={(e) => setEnabled(e.target.checked)}
//           />
//         }
//         label="Enabled"
//       />
//       <Button type="submit" variant="contained" color="primary">
//         Save
//       </Button>
//     </form>
//   );
// };

// export default CreditCardForm;

// import React, { useState, useEffect } from "react";
// import {
//   TextField,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Switch,
//   FormControlLabel,
// } from "@mui/material";
// import axios from "axios";

// const CreditCardForm = ({ onSave, editCard }) => {
//   const [id, setId] = useState("");
//   const [bankName, setBankName] = useState("");
//   const [creditCardName, setCreditCardName] = useState("");
//   const [enabled, setEnabled] = useState(false);
//   const [banks, setBanks] = useState([]); // For storing banks fetched from DB

//   useEffect(() => {
//     // Fetch banks from DB
//     const fetchBanks = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/banks/getBank"
//         ); // Replace with your backend route
//         setBanks(response.data); // Assume response data contains the list of banks
//       } catch (error) {
//         console.error("Error fetching banks:", error);
//       }
//     };

//     fetchBanks();

//     if (editCard) {
//       setId(editCard.id);
//       setBankName(editCard.bankName);
//       setCreditCardName(editCard.creditCardName);
//       setEnabled(editCard.enabled);
//     }
//   }, [editCard]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const createdAt = editCard ? editCard.createdAt : new Date().toISOString();

//     const creditCardData = { bankName, creditCardName, enabled };

//     try {
//       // Save credit card data to the database
//       await axios.post(
//         "http://localhost:5000/api/credit-cards/addCreditCardDetails",
//         creditCardData
//       ); // Replace with your backend route
//       onSave(creditCardData); // Display the saved card data on the screen
//     } catch (error) {
//       console.error("Error saving credit card:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         label="Id"
//         value={id}
//         onChange={(e) => setId(e.target.value)}
//         fullWidth
//         margin="normal"
//         required
//         disabled={!!editCard}
//       />
//       <FormControl fullWidth margin="normal" required>
//         <InputLabel>Bank Name</InputLabel>
//         <Select value={bankName} onChange={(e) => setBankName(e.target.value)}>
//           {banks.map((bank) => (
//             <MenuItem key={bank._id} value={bank.name}>
//               {bank.name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//       <TextField
//         label="Credit Card Name"
//         value={creditCardName}
//         onChange={(e) => setCreditCardName(e.target.value)}
//         fullWidth
//         margin="normal"
//         required
//       />
//       <FormControlLabel
//         control={
//           <Switch
//             checked={enabled}
//             onChange={(e) => setEnabled(e.target.checked)}
//           />
//         }
//         label="Enabled"
//       />
//       <Button type="submit" variant="contained" color="primary">
//         Save
//       </Button>
//     </form>
//   );
// };

// export default CreditCardForm;
import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";

const CreditCardForm = ({ onSave, editCard }) => {
  const [id, setId] = useState("");
  const [bankName, setBankName] = useState("");
  const [creditCardName, setCreditCardName] = useState("");
  const [createdAt, setcreatedAt] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [banks, setBanks] = useState([]);

  // Fetch banks from DB when component mounts
  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get(
          "https://credit-cards-management.onrender.com/api/banks/getBank"
        );
        setBanks(response.data);
      } catch (error) {
        console.error("Error fetching banks:", error);
      }
    };

    fetchBanks();

    if (editCard) {
      // If editing, populate the form with the card data
      setId(editCard._id); // Store _id in case of update
      setBankName(editCard.bankName);
      setCreditCardName(editCard.creditCardName);
      setEnabled(editCard.enabled);
      setcreatedAt(editCard.createdAt);
    }
  }, [editCard]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const cardData = { _id: id, bankName, creditCardName, enabled };
    const cardData = { _id: id, bankName, creditCardName, enabled, createdAt };
    onSave(cardData); // Calls the onSave function passed as props (either handleAddCard or handleEditCard)
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Credit Card Name"
        value={creditCardName}
        onChange={(e) => setCreditCardName(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <FormControl fullWidth margin="normal" required>
        <InputLabel>Bank Name</InputLabel>
        <Select value={bankName} onChange={(e) => setBankName(e.target.value)}>
          {banks.map((bank) => (
            <MenuItem key={bank._id} value={bank.name}>
              {bank.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControlLabel
        control={
          <Switch
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />
        }
        label="Enabled"
      />
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </form>
  );
};

export default CreditCardForm;
