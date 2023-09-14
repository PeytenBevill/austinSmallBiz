import { useState } from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';
import cookie from 'cookie'
import { TextField, Button, Container } from '@mui/material';

function Login() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    // set cookie here
    document.cookie = 'isLoggedIn=true; max-age=180000'
    // set loggedIn = true and max-age = 60*1000 (one minute)

    navigate("/");
  };
  return (
    <>
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            variant="standard"
            type="text"
          />
          <br></br>
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            variant="standard"
            type="password"
          />
          <br></br>
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            sx={{ backgroundColor: 'lightgray' }}
          >
            Login
          </Button>
        </form>
      </Container>
    </>
  );
}

export default Login;
