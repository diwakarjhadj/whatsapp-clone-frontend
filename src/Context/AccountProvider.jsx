import React, {createContext, useEffect, useRef, useState} from 'react';
import {io} from 'socket.io-client';

export const AccountContext= createContext(null);

const AccountProvider = ({children}) => {
    const [account, setaccount]= useState();
    const [person,setperson]=useState({});
    const socket=useRef();
    useEffect(()=>{
      socket.current=io('ws://localhost:9000')
    },[])
  return (
    <AccountContext.Provider value={{account, setaccount,person,setperson,socket}}>
        {children}
    </AccountContext.Provider>
  )
}

export default AccountProvider;
