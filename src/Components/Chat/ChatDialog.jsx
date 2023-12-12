import { Dialog, Box, styled } from '@mui/material';
import React, { useContext } from 'react';
import Menu from './Menu/Menu';
import EmptyChat from './EmptyChat/EmptyChat';
import ChatBox from './EmptyChat/ChatBox';
import { AccountContext } from '../../Context/AccountProvider';
const Component= styled(Box)`
display: flex;
`;

const LeftComponent= styled(Box)`
min-width: 450px;
`;

const RightComponent= styled(Box)`
width: 73%;
min-width: 300px;
height: 100%;
border: 1px solid rgba(0,0,0,0.14);
`;


const dialogStyle = {
    height: '96%',
    width: '100%',
    margin: '20px',
    borderRadius: 0,
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}

const ChatDialog = () => {
    const {person}= useContext(AccountContext);
    console.log(person.length);
    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
            maxWidth={'md'}
        >
            <Component>
                <LeftComponent>
                    <Menu/>
                </LeftComponent>
                <RightComponent>
                    { Object.keys(person).length?<ChatBox/>: <EmptyChat/>}
                </RightComponent>
            </Component>
        </Dialog>
    )
}

export default ChatDialog;
