import React, { useContext, useState } from 'react'
import { theme } from "../theme/theme";
import { Menu, MenuItem, Badge, Box, InputBase, Container, Stack, AppBar, Toolbar, Typography, styled } from "@mui/material";
import { Mail, Notifications } from "@mui/icons-material";
import { Avatar } from '../../node_modules/@mui/material/index';
import { LoginContext } from '../context/LoginContex';
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"

}))
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }

}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))

const Navbar = ({ courseNumber, onClose }) => {

  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  const logout = () => {
     window.localStorage.removeItem("tss-token")

    setLoggedIn(false);

  }

  const [open, setOpen] = useState(false);





  return (
    <AppBar position="sticky" color="primary">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Trainee Selection System</Typography>

        <Typography onClick={() => onClose()} variant="h6" sx={{ display: { xs: "block", sm: "none" } }} >TSS</Typography>
        <Search><InputBase placeholder='Search..' /></Search>
        <Icons>

          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={courseNumber ? courseNumber : 0} color="error">
            <Notifications />
          </Badge>

          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://www.w3schools.com/w3images/avatar2.png"
            onClick={e => setOpen(true)}
          />

        </Icons>
        <UserBox onClick={e => { setOpen(true) }}>
          <Avatar sx={{ width: 30, height: 30 }} src="https://www.w3schools.com/w3images/avatar2.png" />
          <Typography variant="span">Rahat</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={false}
        onClose={e => { setOpen(false) }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      
      >
   
      </Menu>
    </AppBar>


  )
}

export default Navbar