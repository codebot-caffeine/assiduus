import React from "react";
import { AppBar, Toolbar, Typography,Drawer,Box,ListItem,ListItemText,List,ListItemIcon} from "@mui/material";
// import {DashboardIcon , AccountBalanceWalletIcon,AttachMoneyIcon,DescriptionIcon,PersonIcon ,ContactsIcon} from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';

import {useLocation,Link, Outlet} from 'react-router-dom'
import './navbar.css'

function Header() {

    const location = useLocation()

    const iconlists  = [{
        name:'Dashboard',route:"/"
    },{name:'Accounts',route:"/account-balance"},{name:"Payroll",route:"/payroll"},
    {name:"Reports",route:"/reports"},{name:"Advisor",route:"/advisor"},{name:"Contacts",route:"/contacts"}]

    let CustomListItem = ({ to, primary }) => {
        let Icon = primary === "Dashboard" ? DashboardIcon :  primary === "Accounts" ? AccountBalanceWalletIcon : primary === "Payroll" ? AttachMoneyIcon 
        :  primary === "Reports" ? DescriptionIcon : primary === "Advisor" ? PersonIcon:primary === "Contacts" ? ContactsIcon: DashboardIcon
        return(
        <div style={{display:"flex",background:to === location.pathname ? "black" : "",color:to === location.pathname ? "white" : ""}}>
        <ListItemIcon>
        <Icon
              style={to === location.pathname ? { color: "white" } : {}}
        />
        </ListItemIcon>
        <ListItem
          button
          component={Link}
          to={to}
        //   selected={to === location.pathname}
        >
          <ListItemText primary={primary} />
        </ListItem>
        </div>
    )}

    return (
    <>
    <div className="main">
      <AppBar position="static" style={{background: '#fff'}}>
        <Toolbar>
          <Typography>React Navbar Example</Typography>
        </Toolbar>
      </AppBar>
      <div className="bottom">
      <Drawer
        variant="permanent"
        sx={{
            width: 200,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 200, boxSizing: 'border-box' },
          }}
        
      >
        <List>
            {
                iconlists.map((e,i)=>{
                    return(
                        <CustomListItem to={e.route} primary={e.name} key={i}/>
                    )
                })
            }
        </List>
      </Drawer>
      <div style={{padding:'2vw',width:'85%',backgroundColor:"#ececec"}}>
      <Outlet />
      </div>

      </div>   
    </div>
    
    </>
  );
}
export default Header;
