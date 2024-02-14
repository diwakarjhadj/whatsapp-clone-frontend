import React, { useEffect, useState, useContext } from 'react';
import { getUsers } from '../../../Service/api';
import Conversation from './Conversation';
import { Box, Divider, styled } from '@mui/material';
import { AccountContext } from '../../../Context/AccountProvider';

const Component = styled(Box)`
height:81vh;
overflow: overlay;
`;

const StyledDivider= styled(Divider)`
margin: 0 0 0 70px;
background: #e9edef;
opacity: 0.6;`;

const Conversations = ({text}) => {
  const [users, setUser] = useState([]);
  const { account,socket,setActiveUsers } = useContext(AccountContext);
  console.log("account",{account});
  useEffect(() => {
    const fetchData = async () => {
      let res = await getUsers();
      console.log("users",res);
      const filteredData=res.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()))
      setUser(filteredData);
    }
    fetchData();
  }, [text]);
  useEffect(()=>{
    socket.current.emit('addUsers', account);
    socket.current.on('getUsers',users=>{
      setActiveUsers(users);
    })
  },[account]);
  return (
    <Component>
      {
        users.map(user => (
          user.sub !== account.sub &&
          <>
            <Conversation user={user} />
            <StyledDivider />
          </>
        ))
      }
    </Component>
  )
}

export default Conversations;
