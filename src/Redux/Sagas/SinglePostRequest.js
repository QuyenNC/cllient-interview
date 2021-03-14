import axios from 'axios';

export default function singlgePostRequest({id}){
    const url = `https://interview-ncq.herokuapp.com/api/post/${id}`;
    return axios.get(url)
}