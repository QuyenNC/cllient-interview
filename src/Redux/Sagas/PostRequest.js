import axios from 'axios';

export default function postRequest(){
    const url = "https://interview-ncq.herokuapp.com/api/post";
    return axios.get(url)
}