
# Credit Card Management System

This is a simple credit card management system built using React.js and Express.js. It allows users to add, edit, delete, and view credit card details.

## Features

- Add new credit card details
- Edit existing credit card details
- Delete credit cards
- View all credit cards

## Technologies Used

- Frontend: React.js, Material-UI
- Backend: Express.js, MongoDB
- Other: Axios

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance running

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/credit-card-management-system.git
   cd credit-card-management-system
   ```

2. Install dependencies for both the frontend and backend:
   ```sh
   # For the frontend
   cd frontend
   npm install

   # For the backend
   cd ../backend
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following content:
   ```env
   MONGO_URI=mongodb://your-mongodb-uri
   PORT=5000
   ```

4. Start the backend server:
   ```sh
   cd backend
   npm run dev
   ```

5. Start the frontend server:
   ```sh
   cd frontend
   npm start
   ```

6. Open your browser and go to `http://localhost:3000`.

## API Endpoints

### GET /api/cards

Fetch all credit cards.

### POST /api/cards

Create a new credit card.

### PUT /api/cards/:id

Update an existing credit card.

### DELETE /api/cards/:id

Delete a credit card.

## Project Structure

```plaintext
credit-card-management-system/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CreditCardForm.js
│   │   │   ├── CreditCardTable.js
│   │   │   └── ...
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   └── ...
└── backend/
    ├── models/
    │   ├── CreditCard.js
    │   └── ...
    ├── routes/
    │   ├── creditCards.js
    │   └── ...
    ├── server.js
    ├── package.json
    └── ...
```

## Usage

1. **Add New Credit Card**
   - Click on the "Add New Credit Card" button.
   - Fill out the form and submit.

2. **Edit Credit Card**
   - Click on the "Edit" button next to a credit card.
   - Update the details in the form and submit.

3. **Delete Credit Card**
   - Click on the "Delete" button next to a credit card.
   - Confirm the deletion.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.


