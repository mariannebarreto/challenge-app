/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  TextField,
  Button,
} from '@mui/material';

export default function Form() {
  const navigate = useNavigate();

  const handleNavRegister = () => {
    navigate('/RegisterExtra');
  };
  return (
    <section>

      <Typography
        variant="h5"
        sx={{
							  mr: 2,
          mb: 4,
							  fontWeight: 500,
							  letterSpacing: '.2rem',
							  color: 'white',
							  textDecoration: 'none',
        }}
      >
        Everything you need is nested in HIVE

      </Typography>

      <Typography
        variant="p"
        sx={{

							  mr: 2,
							  fontWeight: 200,
							  letterSpacing: '.2rem',
							  color: 'white',
							  textDecoration: 'none',
        }}
      >
        Opening your account is easier than ever - less than 5 mins

      </Typography>

      <form>
        <br />
        <TextField
          style={{
            width: '500px',
            margin: '5px',
            backgroundColor: 'white',
            borderRadius: '10px',
          }}
          type="text"
          label="Name"
          variant="filled"
        />
        <br />
        <TextField
          style={{
            width: '500px',
            margin: '5px',
            backgroundColor: 'white',
            borderRadius: '10px',
          }}
          type="text"
          label="Last name"
          variant="filled"
        />
        <br />

        <TextField
          style={{
            width: '500px',
            margin: '5px',
            backgroundColor: 'white',
            borderRadius: '10px',
          }}
          label="Email"
          type="email"
          placeholder="yourmail@provider.com"
          variant="filled"
        />
        <br />

        <TextField
          style={{
            width: '500px',
            margin: '5px',
            backgroundColor: 'white',
            borderRadius: '10px',
          }}
          type="password"
          label="Password"
          placeholder="Write your password"
          variant="filled"
        />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={handleNavRegister}>
          Create Account
        </Button>
        <Typography
          variant="p"
          noWrap
          component="a"
          href="/Login"

          sx={{

            ml: '10px',
            fontWeight: 50,
            fontSize: '10px',
            letterSpacing: '.2rem',
            color: 'white',
            textDecoration: 'none',
            textAlign: 'right',
          }}
        >
          Already have an account? Login

        </Typography>
      </form>
    </section>
  );
}
