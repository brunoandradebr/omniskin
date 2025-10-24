import axios from "axios";

export const quotation = axios.create({
  baseURL: "https://dolarapi.com/v1/",
});
