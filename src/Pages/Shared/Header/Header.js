import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import { useHistory } from 'react-router';
import { SwipeableDrawer } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Header = () => {
    const { user, userSignOut } = useFirebase();
    const history = useHistory();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }


    const handleLogOut = () => {
        userSignOut(history);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/' style={{ color: '#fff', textDecoration: 'none' }}>Pottery
                        </Link>
                    </Typography>
                    <Box sx={{display: {xs: 'none', md: 'block'}}}>
                    <Link to='/allpotteries' style={{ color: '#fff', textDecoration: 'none' }}>
                        <Button color="inherit">Potteries</Button>
                    </Link>
                    {
                        user?.email ?
                            <Box>
                                <Link to='/dashboard' style={{ color: '#fff', textDecoration: 'none' }}>
                                    <Button color="inherit">Dashboard</Button>
                                </Link>
                                {user.displayName}
                                <Button onClick={handleLogOut} color="inherit">Logout</Button>
                            </Box>
                            :
                            <Link to='/login' style={{ color: '#fff', textDecoration: 'none' }}>
                                <Button color="inherit">Login</Button>
                            </Link>
                    }
                    </Box>
                    <Box sx={{display: {xs: 'block', md: 'none'}}}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    {/* responsive drawer menu */}
                    <SwipeableDrawer
                        anchor='right'
                        open={open}
                        style={{width: '240px'}}
                    >
                       <IconButton>
                            <ChevronRightIcon></ChevronRightIcon>
                        </IconButton> drawer
                    </SwipeableDrawer>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;