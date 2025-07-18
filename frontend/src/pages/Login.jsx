import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(formData);
      // Redirect to home page after successful login
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
          Login
        </Typography>

        {error && (
          <Alert severity='error' sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label='Email'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin='normal'
            required
            disabled={loading}
          />
          <TextField
            label='Password'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin='normal'
            required
            disabled={loading}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            sx={{ mt: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Login'}
          </Button>
        </form>
        <Box sx={{ my: 2 }}>
          <hr style={{ border: 'none', borderTop: '1px solid #ccc' }} />
        </Box>
        <Typography variant='body2' sx={{ textAlign: 'center' }}>
          Don't have an account?{' '}
          <Button color='primary' component={Link} to='/register'>
            Sign up
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
