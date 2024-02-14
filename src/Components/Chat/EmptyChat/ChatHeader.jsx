import { MoreVert, Search } from '@mui/icons-material';
import { Box, Typography,styled } from '@mui/material';
import React, { useContext } from 'react';
import { defaultProfilePicture } from '../../../constanats/data';
import { AccountContext } from '../../../Context/AccountProvider';

const Header= styled(Box)`
height: 44px;
background: #ededed;
padding: 8px 16px;
display: flex;
align-items: center;
`;

const Image = styled('img')({
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%',
});
const Status= styled(Typography)`
margin-left: 12px !important;
font-size: 12px;
color: rgb(0,0,0,0.6);
`;

const RightContainer=styled(Box)`
margin-left: auto;
&>svg{
    padding: 8px;
    font-size: 24px;
    color: #000;
}
`

const ChatHeader = ({person}) => {
    const {activeUsers}=useContext(AccountContext);
  return (
    <Header>
        <Image src={person.picture} alt="image"/>
        <Box>
            <Typography>{person.name}</Typography>
            <Status>{activeUsers?.find(user=> user.sub===person.sub)? 'online': 'offline'}</Status>
        </Box>
        <RightContainer>
            <Search/>
            <MoreVert/>
        </RightContainer>
    </Header>
  )
}

export default ChatHeader