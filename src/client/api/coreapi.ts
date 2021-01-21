import axios from 'axios';

const baseURL = "http://localhost:5000/api"

export async function composePromptResult(psonemodel: any) {
  try {
    const res = await axios.post(`${baseURL}/test`, { psonemodel: psonemodel })
    return res.data;
  } catch (e) {
    console.log(e)
  }
}