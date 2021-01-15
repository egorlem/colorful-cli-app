import axios from "axios"


const instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

export const testFetch = (data: any) => {
  return instance
    .post('result/test', { test: 'Test' })

};