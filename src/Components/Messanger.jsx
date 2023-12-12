import React, { useContext } from 'react'
import LoginDialog from './Account/LoginDialog';
import ChatDialog from './Chat/ChatDialog';
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import { AccountContext } from '../Context/AccountProvider';

const Component = styled(Box)`
height: 100vh;
background: #dcdcdc;
`
const LoginHeader = styled(AppBar)`
height: 200px;
background-color: #00bfa5;
box-shadow: none
`

const Header = styled(AppBar)`
height: 125px;
background-color: #00bfa5;
box-shadow: none
`

const Messanger = () => {
    const { account } = useContext(AccountContext);
    return (
        <>
            <Component>
                {
                    account ? <>
                        <Header>
                            <Toolbar>
                            </Toolbar>
                        </Header>
                        <ChatDialog />
                    </> :
                        <>
                            <LoginHeader>
                                <Toolbar>
                                </Toolbar>
                            </LoginHeader>
                            <LoginDialog />
                        </>

                }


            </Component>
        </>
    )
}

export default Messanger;
