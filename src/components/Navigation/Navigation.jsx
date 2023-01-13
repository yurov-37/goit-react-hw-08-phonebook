import { HomeLink, ContactsLink } from './Navigation.styled';
import { Box, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { FcContacts } from 'react-icons/fc';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box component="nav" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <HomeLink to="/">
        <FcContacts size={'2em'} />
        <Typography variant="h5"> PhoneBook_App</Typography>
      </HomeLink>
      {isLoggedIn && (
        <ContactsLink to="/contacts">
          <Typography variant="h5">Contacts</Typography>
        </ContactsLink>
      )}
    </Box>
  );
};
