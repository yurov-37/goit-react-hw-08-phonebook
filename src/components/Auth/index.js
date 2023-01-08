import { Box } from '@mui/system';
import Login from './Login/Login';
import Register from './Register/Register';
import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.scss';

export default function AuthRootComponent() {
  const location = useLocation();

  return (
    <div className="root">
      <form className="form">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={
            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
          }
        >
          {location.pathname === '/login' ? (
            <Login />
          ) : location.pathname === '/register' ? (
            <Register />
          ) : null}
        </Box>
      </form>
    </div>
  );
}
