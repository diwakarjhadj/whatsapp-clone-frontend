import { Box, InputBase, styled } from '@mui/material';
import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';

const Component= styled(Box)`
background-color: #fff;
height: 45px;
border-bottom: 1px solid #f2f2f2;
display: flex;
align-items: center;
`;

const Wrapper= styled(Box)`
background-color: #f0f2f5;
position: relative;
margin: 0px 13px;
border-radius: 10px;
width: 100%;
`;
const Icon= styled(Box)`
position: absolute;
height: 100%;
padding: 6px 16px;
color: #919191;
`;

const InputField=styled(InputBase)`
width: 100%;
padding: 16px;
padding-left: 65px;
height: 15px;

`;
const Search = ({setText}) => {
    return (
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon fontSize='small'/>
                </Icon>
                <InputField placeholder='search or start a new chat' onChange={(e)=>setText(e.target.value)}/>
            </Wrapper>
        </Component>
    )
}

export default Search;