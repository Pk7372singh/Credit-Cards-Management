import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const getBanks = async () => {
  return axios.get(`${API_BASE_URL}/banks`);
};

export const getCreditCards = async () => {
  return axios.get(`${API_BASE_URL}/credit-cards`);
};

export const createCreditCard = async (creditCard) => {
  return axios.post(`${API_BASE_URL}/credit-cards`, creditCard);
};

export const updateCreditCard = async (id, creditCard) => {
  return axios.put(`${API_BASE_URL}/credit-cards/${id}`, creditCard);
};

export const deleteCreditCard = async (id) => {
  return axios.delete(`${API_BASE_URL}/credit-cards/${id}`);
};
