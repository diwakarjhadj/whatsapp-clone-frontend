import axios from 'axios';

const url='http://localhost:8000';

export const addUser=async (data)=>{
    try{
        await axios.post(`${url}/add`,data);
    } catch(err)
    {
        console.log(err.message);
    }
}

export const getUsers=async ()=>{
    try{
        let res=await axios.get(`${url}/users`);
        console.log(res);
        return res.data;
    }catch(err)
    {
        console.log(err.message);
    }
}

export const setConversation=async (data)=>{
    try{
        await axios.post(`${url}/conversation/add`,data)
    }
    catch(err){
        console.log('Error while calling setConversation api',err.message);
    }
}

export const getConversation=async (data)=>{
    try{
        let response=await axios.post(`${url}/conversation/get`,data);
        return response.data;   
    }
    catch(err){
        console.log('Error while calling setConversation api',err.message);
    }
}

export const newMessage=async (data)=>{
    try{
        await axios.post(`${url}/message/add`,data);
    }catch(err){
        console.log('Error while calling setConversation api',err.message);
    }
}
