import axios from "axios";

//  192.168.15.101
export const api = axios.create({
    baseURL: "http://192.168.15.101:3333"
})