//React
import * as React from 'react';
import { useState, useEffect} from 'react';
import { useUserContext } from '../context/UserContext';
// MUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//axios
import axios from 'axios';
// import { getAnalytics } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, getRedirectResult, signInWithRedirect } from 'firebase/auth';


const bcrypt = require("bcryptjs");

const firebaseConfig = {
  apiKey: "AIzaSyCV9Y1u92nqaJjmp044QiS0dWBbA2WUpGs",
  authDomain: "cah-c12.firebaseapp.com",
  projectId: "cah-c12",
  storageBucket: "cah-c12.appspot.com",
  messagingSenderId: "265583384272",
  appId: "1:265583384272:web:cb57c01af1436ca89bb0d5",
  measurementId: "G-VYCMBR7C95"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

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

const defaultTheme = createTheme();

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { setUser } = useUserContext();

  const auth = getAuth();

  const checkUserSignIn = () => {
    getRedirectResult(auth)
      .then(async (result) => {
        const user = result.user;
        try { 
          const response = await axios.post('http://localhost:3006/register', { username: user.displayName }); 
          if (response.status == 200) { 
            setUser({ username: user.displayName }); 
            console.log("Registered") 
          } else { 
            console.error("error");
           } 
          } catch (err) { 
            console.error(err); 
          } 
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
      
  }
  
  
  useEffect(() => {
    checkUserSignIn();
  }, [])

  let reqURL;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    username = data.get("email");
    password = data.get("password");

    reqURL = 'http://localhost:3006/' + event.target.value;
    //Posts user input data to server for account registration
 try {
  const response = await axios.post(reqURL, {
    username: username,
    password: password
  }, {
    event: event
  });
if (response.status === 200) {
  setUser({ username });
} else {
  console.error("Error registering");
}
}
catch (err) {
  console.error(err);
}
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}