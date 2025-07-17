import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          width: '100%',
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'background.paper',
        }}
      >
        <Typography variant='h4' gutterBottom>
          Sign up
        </Typography>
        <TextField label='Name' type='text' fullWidth margin='normal' />
        <TextField label='Email' type='email' fullWidth margin='normal' />
        <TextField label='Password' type='password' fullWidth margin='normal' />
        <Button variant='contained' color='primary' fullWidth sx={{ mt: 2 }}>
          Sign up
        </Button>
        <Box sx={{ my: 2 }}>
          <hr style={{ border: 'none', borderTop: '1px solid #ccc' }} />
        </Box>
        <Typography variant='body2' sx={{ textAlign: 'center' }}>
          Already have an account?{' '}
          <Button color='primary' component={Link} to='/login'>
            Login
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}

export default Register;
