import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contacts-operations';
import { useEffect } from 'react';
import { selectContacts, selectFilter } from 'redux/selectors';
import {
  List,
  ListItem,
  Avatar,
  Typography,
  CircularProgress,
  IconButton,
} from '@mui/material';
import { MdDelete } from 'react-icons/md';

export default function ContactList() {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const getFirstLetter = name => {
    return name.charAt(0).toUpperCase();
  };

  const filteredContacts = getFilteredContacts();

  return (
    <List sx={{ padding: '20px' }}>
      {isLoading && <CircularProgress />}
      {error && <p>{error}</p>}
      {contacts.length > 0 && (
        <Typography>Total contacts: {contacts.length}</Typography>
      )}
      {contacts.length > 0 &&
        filteredContacts.map(({ id, name, number }) => (
          <ListItem
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              maxWidth: 640,
              mb: 1,
            }}
            key={id}
            divider
          >
            <Avatar sx={{ bgcolor: 'purple' }}>{getFirstLetter(name)}</Avatar>
            <Typography>
              {name}:{number}
            </Typography>
            <IconButton
              aria-label="delete"
              color="secondary"
              onClick={() => dispatch(deleteContact(id))}
            >
              <MdDelete />
            </IconButton>
          </ListItem>
        ))}
    </List>
  );
}
