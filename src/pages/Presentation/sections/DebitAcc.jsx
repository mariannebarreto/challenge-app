/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import debit from '../../../assets/images/debit.jpg';

function DebitAcc() {
  const navigate = useNavigate();

  const handleNavRegister = () => {
    navigate('/Register');
  };

  return (
    <section
      style={{
			  backgroundImage: `url(${debit})`,
			  height: '100vh',
			  backgroundSize: 'cover',
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
				  mt: '120px',
				  pl: '50px',
				  pr: '50px',
				  display: { xs: 'none', md: 'flex' },
				  direction: 'column',
				  mb: '50px',
        }}
      >
        <Grid
          item
          md={6}
          sx={{
					  mt: '120px',
          }}
        >
          <div>
            <Typography
              variant="h3"
              sx={{
							  pl: 5,
							  mr: 2,
							  fontWeight: 800,
							  letterSpacing: '.2rem',
							  color: 'black',
							  textDecoration: 'none',
              }}
            >
              START SAVING AND TRANSACTING INSTANTLY.
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
					  mt: '120px',
          }}
        >
          <div
            style={{
						  backgroundColor: 'rgba(28, 20, 3, 0.84)',
						  textAlign: 'left',
						  borderRadius: '20px',
						  height: 'auto',
            }}
          >
            <Typography
              variant="h6"
              sx={{
							  p: 1,
							  mr: 2,
							  ml: 2,
							  fontWeight: 500,
							  letterSpacing: '.2rem',
							  color: 'white',
							  textDecoration: 'none',
              }}
            >
              <ul>
                <li>
                  No everyday banking fees. You work hard for your money, you
                  should keep it.
                </li>
                <li>
                  Pay your way and transact instantly using Apple Pay or Google
                  Pay or with your Hive Visa debit card .
                </li>
                <li>
                  Budget better with auto categorisation of your spending.
                </li>
                <li>
                  Earn 5% cash back on essential purchases like groceries,
                  public transport, and bill payments.
                </li>
              </ul>
              <Button
                variant="contained"
                size="large"
                sx={{
								  borderRadius: '10px',
								  height: '50px',
								  backgroundColor: 'rgba(161, 120, 26, 0.91)',
								  fontSize: '17px',
								  width: '200px',
								  mb: '15px',
								  ml: '30px',
                }}
                onClick={handleNavRegister}
              >
                Get Started
              </Button>
            </Typography>
          </div>
        </Grid>
      </Grid>

      {/* ----SMALL VERSION */}

      <Grid
        container
        spacing={2}
        sx={{
				  pl: '50px',
				  pr: '40px',
				  display: { xs: 'flex', md: 'none' },
				  direction: 'column',
        }}
      >
        <Grid
          item
          md={6}
          sx={{
					  mt: '92px',
					  alignItems: 'center',
					  mr: '10px',
					  textAlign: 'center',
          }}
        >
          <div
            style={{
						  backgroundColor: 'rgba(28, 20, 3, 0.84)',
						  textAlign: 'center',
						  borderRadius: '10px',
						  height: 'auto',
						  width: 'auto',
						  padding: '10px',
            }}
          >
            <Typography
              variant="h5"
              sx={{
							  mb: '10px',
							  textAlign: 'center',
							  fontWeight: 800,
							  letterSpacing: '.2rem',
							  color: 'white',
							  textDecoration: 'none',
              }}
            >
              START SAVING AND TRANSACTING INSTANTLY.
            </Typography>
            <Typography
              variant="p"
              sx={{
							  paddingBottom: '10px',
							  pr: '10px',
							  mr: '10px',
							  ml: '10px',
							  fontWeight: 400,
							  letterSpacing: '.2rem',
							  color: 'white',
							  textDecoration: 'none',
              }}
            >
              <ul>
                <li>No everyday banking fees.</li>
                <li>Pay your way and transact instantly.</li>
                <li>
                  Budget better with auto categorisation of your spending.
                </li>
                <li>Earn 5% cash back on essential purchases.</li>
              </ul>
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
							  borderRadius: '10px',
							  height: '50px',
							  backgroundColor: 'rgba(161, 120, 26, 0.91)',
							  fontSize: '17px',
							  width: '200px',
							  mt: '20px',
							  mb: '10px',
							  mr: '15px',
              }}
              onClick={handleNavRegister}
            >
              Get Started
            </Button>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default DebitAcc;
