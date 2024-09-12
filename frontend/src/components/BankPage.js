import React, { useEffect, useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const BankList = styled.div`
  margin-top: 20px;
`;

const BankItem = styled(Typography)`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const ErrorMessage = styled(Typography)`
  color: red;
`;

const BankPage = () => {
  const [banks, setBanks] = useState([]);
  const [bankName, setBankName] = useState(""); // To store input bank name
  const [error, setError] = useState("");

  // Fetch banks from the backend when the component mounts
  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/banks/getBank"
        ); // Backend route to get banks
        setBanks(response.data);
      } catch (error) {
        console.error("Error fetching bank data:", error);
      }
    };

    fetchBanks();
  }, []);

  // Handle form submission to add a new bank
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    if (!bankName) {
      setError("Bank name cannot be empty");
      return;
    }

    try {
      // Post request to backend to create a new bank
      const response = await axios.post(
        "http://localhost:5000/api/banks/addBank",
        {
          name: bankName,
        }
      );
      // Update the bank list with the newly added bank
      setBanks([...banks, response.data]);
      setBankName(""); // Reset the input field
      setError(""); // Reset any errors
    } catch (error) {
      console.error("Error adding bank:", error);
      setError(`Failed to add bank due to ${error}`);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Manage Banks
      </Typography>

      {/* Form to Add a New Bank */}
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Bank Name"
          variant="outlined"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          fullWidth
          margin="normal"
        />
        {error && <ErrorMessage variant="body2">{error}</ErrorMessage>}
        <Button type="submit" variant="contained" color="primary">
          Add Bank
        </Button>
      </Form>

      <Typography variant="h5" gutterBottom style={{ marginTop: "20px" }}>
        Bank List
      </Typography>

      {banks.length > 0 ? (
        <BankList>
          {banks.map((bank) => (
            <BankItem key={bank._id} variant="body1">
              {bank.name}
            </BankItem>
          ))}
        </BankList>
      ) : (
        <Typography variant="body1">No banks available.</Typography>
      )}
    </Container>
  );
};

export default BankPage;
