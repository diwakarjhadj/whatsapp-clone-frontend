import { Box, Typography, styled } from '@mui/material';
import React, {useContext} from 'react';
import { AccountContext } from '../../Context/AccountProvider';
const ImageContainer= styled(Box)`
display: flex;
justify-content: center;
`;

const Image =styled('img')({
  width: 200,
  height: 200,
  borderRadius: '50%',
  padding: '25px 0px'
});

const BoxWrapper= styled(Box)`
background: #fff;
padding: 12px 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.08);
& :first-child{
  font-size: 13px;
  color: #009688;
  font-weight: 200;
}
& :last-child{
  margin: 14px 0px;
  color: #4a4a4a;

}
`;

const DescriptionContainer=styled(Box)`
padding: 15px 20px 28px 30px;
&>p {
  font-size: 13px;
  color: #869680; 
}
`;

const Profile = () => {
  const {account} = useContext(AccountContext);

  return (
    <>
    <ImageContainer>
      <Image src={account.picture} alt="dp" />
    </ImageContainer>
    <BoxWrapper>
      <Typography>Your Name</Typography>
      <Typography>{account.name}</Typography>
    </BoxWrapper>
    <DescriptionContainer>
      <Typography>This is not your username or pin. This name will be visible to your Whatsapp contacts.</Typography>
    </DescriptionContainer>
    <BoxWrapper>
      <Typography>About</Typography>
      <Typography>I am the Coolest person</Typography>
    </BoxWrapper>
    </>
  )
}

export default Profile;
