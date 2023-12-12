import { Box, Typography, styled } from '@mui/material';
import React, { useContext } from 'react';
import { AccountContext } from '../../../Context/AccountProvider';
import { setConversation } from '../../../Service/api';

const Component = styled(Box)`
display: flex;
height: 50px;
padding: 13px 0;
cursor: pointer;
`;
const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%',
    padding: '0 14px',
});

const Conversation = ({ user }) => {
    const {setperson,account}= useContext(AccountContext);
    const getUser=async ()=>{
        setperson(user);
        await setConversation({senderId: account.sub, receiverId: user.sub})
    }
    return (
        <>
            <Component onClick={()=> getUser()}>
                <Box>
                    <Image src={user.picture} alt="picture" />
                </Box>
                <Box>
                    <Box>
                        <Typography>{user.name}</Typography>
                    </Box>
                </Box>
            </Component>
            
        </>
    )
}

export default Conversation