import axios from 'axios';

const BASE_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch`;

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    // Accept: 'application/json',
  },
});
