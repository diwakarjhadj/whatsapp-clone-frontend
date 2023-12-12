import { MoreVert, Search } from '@mui/icons-material';
import { Box, Typography,styled } from '@mui/material';
import React from 'react';
import { defaultProfilePicture } from '../../../constanats/data';

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
  return (
    <Header>
        <Image src={person.picture} alt="image"/>
        <Box>
            <Typography>{person.name}</Typography>
            <Status>Offline</Status>
        </Box>
        <RightContainer>
            <Search/>
            <MoreVert/>
        </RightContainer>
    </Header>
  )
}

export default ChatHeader