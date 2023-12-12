import React, { useState } from 'react'
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem , styled} from '@mui/material';

const MenuOption= styled(MenuItem)`
font-size: 14px;
padding: 15px 60px 5px 24px;
color: #4a4a4a;
`
const HeaderMenu = ({setopenDrawer}) => {
    const [open, setopen]=useState(null);
    const handleClose=()=>{
        setopen(null);
    }

    const handleClick= (e)=>{
        setopen(e.currentTarget);
    }
    return (
        <>
            <MoreVert onClick={handleClick}/>
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuOption onClick={()=> {handleClose(); setopenDrawer(true); }}>Profile</MenuOption>
                
            </Menu>
        </>
    )
}

export default HeaderMenu