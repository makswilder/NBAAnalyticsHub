import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

function Login() {
  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 8,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant='h4' gutterBottom>
        Login
      </Typography>
      <TextField label='Email' type='email' fullWidth margin='normal' />
      <TextField label='Password' type='password' fullWidth margin='normal' />
      <Button variant='contained' color='primary' fullWidth sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
}

export default Login;
