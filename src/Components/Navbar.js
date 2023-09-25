import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';

// assets and css
import './navbar.css';
// import ProfilePhoto from '../assets/pankaj_bhati.jpg';

const pages = ['Experience', 'Projects', 'Contact'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" style={{backgroundColor: "#FDFCFC", borderBottom: "1px solid black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Droid Serif,Georgia,serif0',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              letterSpacing: '-1px'
            }}
          >
            Pankaj Bhati
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" className="navbar-pages" >
                  <Link to={page} className='navbar-links' >{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Droid Serif,Georgia,serif0',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              letterSpacing: "-1px"
            }}
          >
            Pankaj Bhati
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                <Link to={page} className='navbar-links' >{page}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: {xs: 'none', md: 'flex'} }}>
            <Tooltip title="Pankaj Bhati">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Pankaj Bhati" src={"/assets/pankaj_bhati.jpg"} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './navbar.css';

// function Navbar() {
//   return (
//     <nav>
//       <div className="logo">
//         <Link to="/">Your Name</Link>
//       </div>
//       <ul className="nav-links">
//         <li>
//           <Link to="/">About</Link>
//         </li>
//         <li>
//           <Link to="/experience">Experience</Link>
//         </li>
//         <li>
//           <Link to="/education">Education</Link>
//         </li>
//         <li>
//           <Link to="/projects">Projects</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
