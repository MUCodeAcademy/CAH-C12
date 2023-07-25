//React
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useUserContext } from '../context/UserContext';
import { useNavigate } from "react-router-dom";
//MUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//Firebase
// import { getAnalytics } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, getRedirectResult, signInWithRedirect } from 'firebase/auth';
//axios
import axios from 'axios';
import { FormControl, FormLabel } from '@mui/material';

const firebaseConfig = {
  apiKey: "AIzaSyD5UnogGBXCUCoBhfov3c6YFXLWSTk0vag",
  authDomain: "cahgroupproject.firebaseapp.com",
  projectId: "cahgroupproject",
  storageBucket: "cahgroupproject.appspot.com",
  messagingSenderId: "465826634355",
  appId: "1:465826634355:web:764f2593a08d364b9be806",
  measurementId: "G-PKWHF889C6"
};

const app = initializeApp(firebaseConfig);
const port = process.env.REACT_APP_DB_PORT;
// const analytics = getAnalytics(app);



const bcrypt = require("bcryptjs");
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Midland Code Academy Cohort 12
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
// TODO Routes to Lobby

const defaultTheme = createTheme();

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const auth = getAuth();
  // let reqURL = '';

  //Google sign-in function
  const googleSignIn = async (e) => {
    e.preventDefault();
  
    const provider = new GoogleAuthProvider();
    
    signInWithRedirect(auth, provider);
    // checkUserSignIn();
  }


// Checks to see if the username and password match with the server
const checkUserSignIn = () => {
  getRedirectResult(auth)
    .then(async (result) => {
      const user = result.user;
      try { 
        const response = await axios.post(`http://localhost:${port}/auth/register`, { 
          username: user.displayName, 
          type: 'google' 
        }); 
        if (response.status == 200) { 
          setUser({ username: user.displayName }); 
          console.log("Registered") 
          navigate("/lobbypage");
        } else { 
          console.error("error");
          console.log("error");
        } 
        } catch (err) { 
          console.error(err); 
          console.log("catch error")
        } 
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    });
}

  const handleInput = (e,inputType) => {
    let value = e.target.value;
    if(inputType === 'username'){
        setUsername(value);
    } else if(inputType === 'password'){
        setPassword(value);
    }
    console.log("changed")
  };
  
  
  // useEffect(() => {
  //   checkUserSignIn();
  // }, []);

  let reqURL;
  //Submit function
  const handleLogin = async (e) => {
    e.preventDefault();
    reqURL = `http://localhost:${port}/auth/` + e.target.value;
    console.log('Request URL:', reqURL);

    try {
      const response = await axios.post(reqURL, {
        username: username,
        password: password
      });
      if (response.status === 200) {
        setUser({ username });
        navigate("/lobbypage");
        checkUserSignIn(); // Call after successful login or registration
      } else {
        console.error("Error registering");
      }
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 400) {
        setError(err.response.data.error);
      }
    }
}
   
  useEffect(() => {
    if (error) {
      alert(error);
      setError();
    }
  }, [error])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Cards_Against_Humanity_logo.png/1200px-Cards_Against_Humanity_logo.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
               required
                fullWidth
                autoFocus
                name="username"
                autoComplete="email"
                id="Username"
                label="Email Address or Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                autoFocus
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                primary="true"
                value="register"
               disabled={username.length < 4 || password.length < 4}
               onClick={(e) => {
              handleLogin(e);
          }}
              >
               Register
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                value = 'login' 
                primary="true"
               disabled={username.length < 4 || password.length < 4}
               onClick={(e) => {
              handleLogin(e);
          }}
              >
                Sign In
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => googleSignIn(e)}
              >
                Sign In With Google
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item>
                  {/* <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link> */}
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}