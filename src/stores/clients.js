/* Importing Package Dependencies */
import axios from "axios/index";
/* Importing config variables */
import { API_URL } from "../constants/apis";

/* Setting up a single client source 
  to facilitate network / API 
  operations in the application 
*/ 
const client = (baseUrl) => (
  axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Version": "1.0"
    },
  })
);

const clients = {
  default: {
    client: client(API_URL),
  },
};

export default clients;
