//React
import * as React from 'react';
import { useState, useEffect} from 'react';
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
  let reqURL = '';

  //Google sign-in function
  const googleSignIn = async (e) => {
    e.preventDefault();
  
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    signInWithRedirect(provider);
    
    signInWithRedirect(auth, provider);
    navigate("/lobbypage");
  }


// Checks to see if the username and password match with the server
  const checkUserSignIn = () => {
    getRedirectResult(auth)
      .then(async (result) => {
        if(result.credential){
          //
          var token = result.credential.accessToken;
          console.log('User veified w/ token');
        } else {
          setError({error: 'Unable to verify user'});
        }
        const user = result.user;
        try { 
          const response = await axios.post('http://localhost:3006/auth/fireAuthSignOn', { username: user.displayName }); 
          if (response.status == 200) { 
            setUser({ username: user.displayName,
            type: 'google' }); 
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
      
  };

  const handleInput = (e,inputType) => {
    let value = e.target.value;
    if(inputType === 'username'){
        setUsername(value);
    } else if(inputType === 'password'){
        setPassword(value);
    }
    console.log("changed")
  };
  
  
  useEffect(() => {
    checkUserSignIn();
  }, []);

  //Submit function
  const handleSubmit = async (event) => {
    event.preventDefault();

       //Gather user data
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
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <label htmlFor='password'>Password</label>
              <input
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              </form>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                value = 'register' 
                primary="true"
               disabled={username.length < 4 || password.length < 4}
               onClick={(e) => {
                handleSubmit(e);
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
              handleSubmit(e);
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