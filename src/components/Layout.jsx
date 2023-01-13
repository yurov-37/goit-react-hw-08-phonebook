import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './Header/Header';
import { Paper } from '@mui/material';
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
            ? 'linear-gradient(#457fcaa4,#5691c8b2)'
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
