import { IEColor } from './../types/global';
import axios from 'axios';

const baseURL = "http://localhost:5000/v1/api"

export async function composePromptResult(psonemodel: any) {
  try {
    const res = await axios.post(`${baseURL}/test`, { psonemodel: psonemodel })
    return res.data;
  } catch (e) {
    console.log(e)
  }
}

export async function fetchColors(): Promise<IEColor[] | any> {
  try {
    const res = await axios.get(`${baseURL}/initialize/colors`)
    return res.data.list
  } catch (e) {
    return e
  }
}