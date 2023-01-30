import axios from "axios";

const baseURL = "http://localhost:6005/api";

const api = axios.create({
  baseURL: baseURL,
  headers: {
  'Content-Type': 'application/json; charset=utf-',
  },
});

export const get = async (url) => {
  try {
    const response = await fetch(`${baseURL}/${url}`);
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
};

export const post = async (url, data) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
