import React, {useContext} from 'react'
import { Dialog, Box, Typography, ListItem, List, styled} from '@mui/material';
import {qrCodeImage} from '../../constanats/data';
import {GoogleLogin} from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { AccountContext } from '../../Context/AccountProvider';
import { addUser } from '../../Service/api';

const Component= styled(Box)`
display: flex;
`;
const Container= styled(Box)`
padding: 56px 0px 56px 56px;
`;
const QRCode= styled('img')({
    height: 264,
    width: 264,
    margin: '50px 0px 0px 50px'
});

const Title= styled(Typography)`
font-size: 26px;
color: #525252;
font-family: inherit;
margin-bottom: 25px;
`;

const StyledList= styled(List)`
&>li{
    padding: 0px;
    margin-top: 15px;
    font-size: 18px;
    line-height: 20px;
    color: #4a4a4a;
}`

const dialogStyle={
    height: '96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}
const LoginDialog = () => {
    const {setaccount}= useContext(AccountContext);
    const onLoginSuccess=async (res)=>{
        const decoded = jwtDecode(res.credential);
        setaccount(decoded);
        await addUser(decoded);
    };

    const onLoginError=(res)=>{
        console.log("Login Failed",res)
    }
    return (
        <Dialog open={true} PaperProps={{sx: dialogStyle}} hideBackdrop={true}>
            <Component>
                <Container>
                    <Title>
                        To Use whatsapp on Your Computer:
                    </Title>
                    <StyledList>
                        <ListItem>
                            1. Open Whatsapp on Your Phone
                        </ListItem>
                        <ListItem>
                            2. Tap Menu Settings and Select whatsapp Web
                        </ListItem>
                        <ListItem>
                            3. Point Your Phone to this screen to capture the Code
                        </ListItem>
                    </StyledList>
                </Container>
                <Box style={{
                    position: 'relative',
                }}>
                    <QRCode src={qrCodeImage} alt= "qr code"/>
                    <Box style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateX(25%)'
                        }}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}/>
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;
