import axios from 'axios';

export default function singlgePostRequest({id}){
    const url = `/api/post/${id}`;
    return axios.get(url)
}