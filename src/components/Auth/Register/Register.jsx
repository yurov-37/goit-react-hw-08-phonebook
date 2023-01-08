import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

export default function Register() {
  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Регистрация
      </Typography>
      <Typography
        variant="body1"
        fontFamily="Poppins"
        textAlign="center"
        marginBottom={2}
      >
        Введите данные для регистрации
      </Typography>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        placeholder="Введите ваш username"
        fullWidth={true}
        margin={'normal'}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        fullWidth={true}
        margin={'normal'}
      />
      <TextField
        type="password"
        id="outlined-basic"
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
        fullWidth={true}
        margin={'normal'}
      />

      <Button
        sx={{
          fontFamily: 'Poppins',
          marginTop: 2,
          marginBottom: 2,
          width: '40%',
        }}
        variant="contained"
      >
        Регистрация
      </Button>
      <Typography
        sx={{ fontFamily: 'Poppins' }}
        variant="body1"
        fontFamily="Poppins"
      >
        У вас есть аккаунт?
        <span className="incitingText">Авторизация</span>
      </Typography>
    </>
  );
}
