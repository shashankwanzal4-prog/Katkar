import axios from "axios";

const API = "https://katkar.onrender.com";

export const getEvents = () => axios.get(`${API}/events`);
export const bookEvent = (data) => axios.post(`${API}/book`, data);
