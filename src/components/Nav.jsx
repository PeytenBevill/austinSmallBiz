import { useState } from 'react';
import cookie from 'cookie';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Nav() {
  const cookies = cookie.parse(document.cookie);
  const [addBoolean, setAddBoolean] = useState(false);
  const toggleAdd = () => {
    setAddBoolean(!addBoolean);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#228B22' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Austin Small Businesses
            </Typography>
            <Link
              to="/listings"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button color="inherit">Listings</Button>
            </Link>
            <Link
              to="/login"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              {cookies.isLoggedIn ? (
                <Button
                  color="inherit"
                  onClick={() => {
                    document.cookie = cookie.serialize('isLoggedIn', null, {
                      maxAge: 0,
                    });
                  }}
                >
                  LOGOUT
                </Button>
              ) : (
                <Button color="inherit">Login</Button>
              )}
            </Link>
            {cookies.isLoggedIn && (
              // <Link to="/add" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit" onClick={toggleAdd}>
                Add
              </Button>
              // </Link>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      {cookies.isLoggedIn && <p className="user">Logged in as: test</p>}
    </>
  );
}
