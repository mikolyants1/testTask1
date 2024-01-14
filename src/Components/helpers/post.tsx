import axios from "axios";
import { data } from "../types/type";

async function postData(data:data):Promise<void> {
  return axios.post("http://localhost/user",data)
};

export default postData