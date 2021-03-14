import axios from 'axios';

export default function postRequest(){
    const url = "/api/post";
    return axios.get(url)
}