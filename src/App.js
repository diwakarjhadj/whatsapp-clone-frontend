import React from 'react';
import Messanger from "./Components/Messanger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from './Context/AccountProvider';

const App = () => {
  const clientId = '127908852268-niokr437m0c8flb66mvmu1hvojimgq56.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messanger />
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App;
