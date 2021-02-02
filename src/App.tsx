import React, {useState} from 'react';
import GlobalStyle from "./GlobalStyle"
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Container} from "@material-ui/core"
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import Routes from "./Routes"

function App() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <BrowserRouter>
    <header>
      <Container>
        <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon  style={{color: "#fff", fontSize:"28px" }} />
      </Button>
        <Menu
        style={{marginTop: 40}}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Route>
          <MenuItem onClick={handleClose}>
            <Link to="/dashboard">
             Dashboard
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link  to="bookmark">
              Bookmark
            </Link>
          </MenuItem>
        </Route>
      </Menu>
        <span className="logo-menu">SOMOS</span>
        </div>
      </Container>
    </header>
      <Switch>
        <Routes />
      </Switch>
    </BrowserRouter>
    <GlobalStyle />
    </>
    
  );
}

export default App;
