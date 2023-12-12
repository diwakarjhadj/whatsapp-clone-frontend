import { Box, InputBase, styled } from '@mui/material';
import React from 'react';
import { EmojiEmotionsOutlined, AttachFileOutlined, Mic } from '@mui/icons-material';

const Container=styled(Box)`
height: 55px;
background: #ededed;
display: flex;
width: 100%;
align-items: center;
padding: 0 15px;
&>*{
    margin: 5px;
    color: #919191;
}
`;
const Search= styled(Box)`
background-color: #fff;
border-radius: 18px;
width: calc(94% - 100px);
`;
const InputField= styled(InputBase)`
width: 100%;
padding: 20px;
height: 20px;
padding-left: 25px;
font-size: 14px;
`;
const ClipIcon=styled(AttachFileOutlined)`
transform: rotate(40deg);
`;

const Footer = ({sendText,setValue,value}) => {
   
  return (
    <Container>
        <EmojiEmotionsOutlined/>
        <ClipIcon/>
        <Search>
            <InputField 
            placeholder='Type a Message '
            onChange={(e)=>setValue(e.target.value)}
            value={value}
            onKeyPress={(e)=>sendText(e)}/>
        </Search>
        <Mic/>
    </Container>
  )
}

export default Footer;
