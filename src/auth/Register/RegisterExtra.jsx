/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  TextField,
  Button,
  Grid,
} from '@mui/material';

export default function RegisterExtra() {
  const navigate = useNavigate();

  const handleNavRegister = () => {
    navigate('/DepositAcc');
  };
  return (
    <section>
      <Grid
        container
        spacing={2}
        sx={{
				  pr: '40px',
          ml: '25%',
				  display: { xs: 'flex', md: 'flex' },
				  direction: 'column',
          alignItems: 'center',
        }}
      >

        <Grid
          item
          md={6}
          sx={{
					  mt: '80px',
					  alignItems: 'center',
					  mr: '10px',
					  textAlign: 'center',
          }}
        >

          <Typography
            variant="h5"
            sx={{
							  mr: 2,
              mb: 4,
							  fontWeight: 500,
							  letterSpacing: '.2rem',
							  color: 'white',
							  textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Just extra information to enter the HIVE!

          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
					  mt: '20px',
					  alignItems: 'center',
					  mr: '10px',
					  textAlign: 'center',
          }}
        >

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
            Your information is safe with us.

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
              label="Adress"
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
              type="number"
              label="Phone"
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
              label="City"
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
              label="State"
              variant="filled"
            />

            <br />
            <br />
            <Button variant="contained" color="primary" onClick={handleNavRegister}>
              Continue
            </Button>
            <Typography
              variant="p"
              noWrap
              component="a"
              href="/DepositAcc"

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
              By clicking CONTINUE, you accept
              the Terms & Conditions of HIVE.

            </Typography>
          </form>
        </Grid>
      </Grid>
    </section>
  );
}
