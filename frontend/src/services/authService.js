const API_BASE_URL = 'http://localhost:8080/api/v1';

const authService = {
  async register(userData) {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    return await response.json();
  },

  async login(credentials) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const data = await response.json();

    // Store token in localStorage
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('tokenExpiry', Date.now() + data.expiresIn * 1000);
    }

    return data;
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiry');
  },

  getToken() {
    const token = localStorage.getItem('token');
    const expiry = localStorage.getItem('tokenExpiry');

    if (token && expiry && Date.now() < parseInt(expiry)) {
      return token;
    }

    // Token expired, remove it
    this.logout();
    return null;
  },

  isAuthenticated() {
    return !!this.getToken();
  },

  getAuthHeaders() {
    const token = this.getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  },
};

export default authService;
