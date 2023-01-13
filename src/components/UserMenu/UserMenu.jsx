import { Box, Button, Typography } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="h6" sx={{ mr: 2 }}>
        Welcome, {user.name}
      </Typography>
      <Button
        type="button"
        variant="contained"
        color="primary"
        sx={{ backgroundColor: 'white', fontWeight: 700, color: 'black' }}
        onClick={handleLogOut}
      >
        Logout
      </Button>
    </Box>
  );
};
