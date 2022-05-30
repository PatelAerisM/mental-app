/* Base Signup Page - front end

prompts a user to signup for an account 
depends on: ADD_USER mutation
only take email, and password

assigned to:

*/


import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Copyright from '../components/Elements/Copyright';

const theme = createTheme();

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  const [emailState, setEmailState] = useState(false);
  const [passwordState, setPasswordState] = useState(false);
  const [pwHelper, setPwHelper] = useState('');
  const [emailHelper, setEmailHelper] = useState('');


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });

      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (error) {
      setEmailState(false)
      setEmailHelper('Email already exists. Please try logging in.')
    }
  };

  const handleChangePw = (event) => {
    const { name, value } = event.target;
    if (value.length > 8) {
      setPasswordState(true)
    } else {
      setPasswordState(false)
      setPwHelper('Password must be at least 8 characters.')

    }

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleChangeEmail = (event) => {
    const { name, value } = event.target;
    const validEmail = new RegExp(/^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/)
    if (validEmail.test(value)) {
      setEmailState(true)
    } else {
      setEmailState(false)
      setEmailHelper('Please enter a valid email')
    }
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{
        backgroundColor: 'white', marginTop: '100px', marginBottom: '250px',
      }}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChangeEmail}
                  error={!emailState}
                  helperText={emailHelper}
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
                  onChange={handleChangePw}
                  error={!passwordState}
                  helperText={pwHelper}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="legal" color="primary" />}
                label="I confirm that I have read the legal documents and agree to the terms."
                checked={true}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!(emailState && passwordState)}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>

          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}
export default Signup;
