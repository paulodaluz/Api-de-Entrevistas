import axios from "axios";
export default () => {
  return axios.create({
    baseURL: `http://localhost:3001`,
    headers: 
    {
        Authorization: 'Basic dXN1YXJpbzpzZW5oYQ=='
    }
  });
};
