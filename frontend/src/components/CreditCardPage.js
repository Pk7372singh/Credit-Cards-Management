// import React, { useState } from "react";
// import { Container, Typography, Button, Box, Modal } from "@mui/material";
// import CreditCardTable from "./CreditCardTable";
// import CreditCardForm from "./CreditCardForm";

// const CreditCardPage = () => {
//   const [cards, setCards] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editCard, setEditCard] = useState(null);

//   const handleAddCard = (card) => {
//     setCards([...cards, card]);
//     setIsModalOpen(false);
//   };

//   const handleEditCard = (updatedCard) => {
//     setCards(
//       cards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
//     );
//     setIsModalOpen(false);
//     setEditCard(null);
//   };

//   const handleDeleteCard = (id) => {
//     setCards(cards.filter((card) => card.id !== id));
//   };

//   const handleOpenModal = (card) => {
//     setEditCard(card);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setEditCard(null);
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Manage Credit Cards
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => {
//           setEditCard(null);
//           setIsModalOpen(true);
//         }}
//       >
//         Add New Credit Card
//       </Button>
//       <CreditCardTable
//         cards={cards}
//         onEdit={handleOpenModal}
//         onDelete={handleDeleteCard}
//       />
//       <Modal open={isModalOpen} onClose={handleCloseModal}>
//         <Box
//           sx={{
//             padding: 4,
//             backgroundColor: "white",
//             margin: "auto",
//             marginTop: "10%",
//             width: 400,
//             borderRadius: 2,
//             boxShadow: 24,
//           }}
//         >
//           <CreditCardForm
//             onSave={editCard ? handleEditCard : handleAddCard}
//             card={editCard}
//             onClose={handleCloseModal}
//           />
//         </Box>
//       </Modal>
//     </Container>
//   );
// };

// export default CreditCardPage;
import React, { useState, useEffect } from "react";
import { Container, Typography, Button, Box, Modal } from "@mui/material";
import CreditCardTable from "./CreditCardTable";
import CreditCardForm from "./CreditCardForm";
import axios from "axios"; // For making HTTP requests

const CreditCardPage = () => {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editCard, setEditCard] = useState(null);

  // Fetch all cards when the page loads
  useEffect(() => {
    fetchCreditCards();
  }, []);

  // Function to fetch cards from the database
  const fetchCreditCards = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/credit-cards/getCreditCard"
      );
      setCards(response.data); // Assuming response.data contains the list of cards
    } catch (error) {
      console.error("Error fetching credit cards:", error);
    }
  };

  // Add a new card
  const handleAddCard = async (card) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/credit-cards/addCreditCardDetails",
        card
      );
      setCards([...cards, response.data]); // Update state with new card
    } catch (error) {
      console.error("Error adding credit card:", error);
    }
    setIsModalOpen(false);
  };

  // Edit an existing card
  const handleEditCard = async (updatedCard) => {
    try {
      await axios.put(
        `http://localhost:5000/api/credit-cards/${updatedCard._id}`,
        updatedCard
      );
      setCards(
        cards.map((card) => (card._id === updatedCard._id ? updatedCard : card))
      ); // Update state with edited card
    } catch (error) {
      console.error("Error updating credit card:", error);
    }
    setIsModalOpen(false);
    setEditCard(null);
  };

  // Delete a card
  const handleDeleteCard = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/credit-cards/${id}`);
      setCards(cards.filter((card) => card._id !== id)); // Update state to remove deleted card
    } catch (error) {
      console.error("Error deleting credit card:", error);
    }
  };

  const handleOpenModal = (card) => {
    setEditCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditCard(null);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Manage Credit Cards
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setEditCard(null);
          setIsModalOpen(true);
        }}
      >
        Add New Credit Card
      </Button>
      <CreditCardTable
        cards={cards}
        onEdit={handleOpenModal}
        onDelete={handleDeleteCard}
      />
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            padding: 4,
            backgroundColor: "white",
            margin: "auto",
            marginTop: "10%",
            width: 400,
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <CreditCardForm
            onSave={editCard ? handleEditCard : handleAddCard}
            editCard={editCard}
          />
        </Box>
      </Modal>
    </Container>
  );
};

export default CreditCardPage;
