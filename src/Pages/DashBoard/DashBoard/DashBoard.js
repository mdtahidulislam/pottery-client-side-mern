import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import { useHistory } from 'react-router';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import ManageOrder from '../ManageOrder/ManageOrder';

const drawerWidth = 240;

function DashBoard(props) {
    const { userSignOut } = useAuth();
    const history = useHistory();
    const handleLogOut = () => {
        userSignOut(history);
    }

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    let { path, url } = useRouteMatch();
    const { user, admin } = useAuth();

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem button >
                    <NavLink to={`${url}`} style={{ width: '100%', textDecoration: 'none' }}>My Orders</NavLink>
                </ListItem>
                <ListItem button >
                    <NavLink to={`${url}/review`} style={{ width: '100%', textDecoration: 'none' }}>Review</NavLink>
                </ListItem>
                <ListItem button >
                    <NavLink to={`${url}/pay`} style={{ width: '100%', textDecoration: 'none' }}>Pay</NavLink>
                </ListItem>
                {
                    admin &&
                    <Box>
                        <ListItem button >
                            <NavLink to={`${url}/makeadmin`} style={{ width: '100%', textDecoration: 'none' }}>Make Admin</NavLink>
                        </ListItem>
                        <ListItem button >
                            <NavLink to={`${url}/addpottery`} style={{ width: '100%', textDecoration: 'none' }}>Add Pottery</NavLink>
                        </ListItem>
                        <ListItem button >
                            <NavLink to={`${url}/managepottery`} style={{ width: '100%', textDecoration: 'none' }}>Manage Pottery</NavLink>
                        </ListItem>
                        <ListItem button >
                            <NavLink to={`${url}/manageorders`} style={{ width: '100%', textDecoration: 'none' }}>Manage Orders</NavLink>
                        </ListItem>
                    </Box>
                }

                <ListItem button >
                    <Button style={{ width: '100%' }} onClick={handleLogOut} color="inherit">Logout</Button>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="p" >
                        <Link to='/' style={{ color: '#fff', textDecoration: 'none' }}>HOME</Link>
                        <br />
                        Logged in as ({user.displayName})
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addpottery`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/managepottery`}>
                        <ManageProduct></ManageProduct>
                    </Route>
                    <Route path={`${path}/manageorders`}>
                        <ManageOrder></ManageOrder>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoard;
