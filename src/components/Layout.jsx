import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Paper } from '@mui/material';
import Header from './Header/Header';
import HomeIamge from '../images/jeshoots-com-pUAM5hPaCRI-unsplash.jpg';

export const Layout = () => {
  const location = useLocation();

  return (
    <Paper
      sx={{
        margin: '0 auto',
        maxWidth: 1600,
        backgroundImage:
          location.pathname === '/contacts'
            ? 'linear-gradient(#C9D6FF,#E2E2E2)'
            : `url(${HomeIamge})`,
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Paper>
  );
};
