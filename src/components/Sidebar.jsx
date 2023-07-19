import React from 'react'
import { Box, Switch } from "@mui/material";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Home, School, AddBox, Info, LiveHelp, ContactPage, Login } from '@mui/icons-material';
import { NavLink, useLocation  } from "react-router-dom";
import { styled } from '@mui/material/styles';


import Link from '@mui/material/Link';
import { Link as ReactRouterLink } from 'react-router-dom';


const Sidebar = ({close}) => {
  const location = useLocation();


  const isActiveLink = (path) => {
    if (location.pathname === path) {
     return  "red" ;
    }
  

  
  };
  return (

    <Box flex={1} sx={{ display: { xs: close?"none":"block", sm: "block" } }}>
      <Box position="fixed" >



        <List>
          <ListItem disablePadding>

            <Link flex={1} style={{ textDecoration: 'none', color:isActiveLink("/")}} component={NavLink} to="/" variant="ListItemButton" exact  >
              <ListItemButton >
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home Page" />
              </ListItemButton>
            </Link>

          </ListItem>

          <ListItem disablePadding>
            <Link flex={1} style={{ textDecoration: 'none', color:isActiveLink("/courses") }} component={ReactRouterLink} to="/courses" variant="ListItemButton" >
              <ListItemButton >
                <ListItemIcon>
                  <School />
                </ListItemIcon>
                <ListItemText primary="Courses" />
              </ListItemButton>
            </Link>
          </ListItem>



          <ListItem disablePadding>
            <Link flex={1} style={{ textDecoration: 'none', color:isActiveLink("/login") }} component={ReactRouterLink} to="/login" variant="ListItemButton" >
              <ListItemButton >
                <ListItemIcon>
                  <Login />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
            <Link flex={1} style={{ textDecoration: 'none', color:isActiveLink("/registration") }} component={ReactRouterLink} to="/registration" variant="ListItemButton" >
              <ListItemButton >
                <ListItemIcon>
                  <AddBox />
                </ListItemIcon>
                <ListItemText primary="Registration" />
              </ListItemButton>
            </Link>
          </ListItem>

          
       

        </List>
      </Box>
    </Box>



  )
}

export default Sidebar