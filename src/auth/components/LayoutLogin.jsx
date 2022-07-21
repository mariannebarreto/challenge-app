/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
import React from 'react';
import { Toolbar, Grid } from '@mui/material';
import { Box } from '@mui/system';
import FormLogin from './FormLogin';
import NavBar from '../../pages/Presentation/components/NavBar';
import openAcc from '../../assets/images/openAcc.png';

function LayoutLogin({ children }) {
  return (
    <section>
      <NavBar>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />

          {children}
        </Box>
      </NavBar>
      <Grid
        container
        spacing={3}
        sx={{
				  alignItems: 'stretch',
				  direction: 'row',
				  mt: '10px',
        }}
      >
        <Grid
          item
          md={6}
        >
          <img
            src={openAcc}
            alt="open your account"
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          />

        </Grid>
        <Grid
          item
          md={6}
          sx={{
            mt: '80px',
		  backgroundColor: 'transparent',
            display: { xs: 'flex', md: 'flex' },
          }}
        >

          <FormLogin />
        </Grid>
      </Grid>
    </section>
  );
}
export default LayoutLogin;
