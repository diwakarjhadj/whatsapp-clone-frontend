import React, { createContext, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setaccount] = useState();
  const [person, setperson] = useState({});
  const [activeUsers, setActiveUsers] = useState([])
  const [newMessageFlag, setnewMessageFlag] = useState(false);
  const socket = useRef();
  useEffect(() => {
    socket.current = io('ws://localhost:9000')
  }, [])
  return (
    <AccountContext.Provider value={{ account, setaccount, person, setperson, socket, activeUsers, setActiveUsers,newMessageFlag, setnewMessageFlag}}>
      {children}
    </AccountContext.Provider>
  )
}

export default AccountProvider;
