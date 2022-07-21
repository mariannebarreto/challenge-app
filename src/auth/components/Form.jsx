import React from 'react';
import {
  Typography,
  TextField,
  Button,
} from '@mui/material';

export default function Form() {
  return (
    <section>

      <Typography variant="h5">BASIC WITH MATERIAL UI</Typography>
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
          type="text"
          label="Phone"
          variant="filled"
        />
        <br />
        <br />
        <Button variant="contained" color="primary">
          save
        </Button>
      </form>
    </section>
  );
}
