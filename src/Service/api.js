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
        console.log('Error while calling getConversation api',err.message);
    }
}

export const newMessage=async (data)=>{
    try{
        await axios.post(`${url}/message/add`,data);
    }catch(err){
        console.log('Error while calling newMessage api',err.message);
    }
}
export const getMessages=async (id)=>{
    try{
        let res=await axios.get(`${url}/message/get/${id}`);
        return res.data;
    }catch(err){
        console.log('Error while calling getMessage api',err.message);
    }
}

export const uploadFile= async (data)=>{
    try{
        return await axios.post(`${url}/file/upload`,data);
    }catch(err){
        console.log('Error while calling uploadFile api',err.message);
    }
}
