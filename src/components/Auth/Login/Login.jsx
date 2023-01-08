import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

export default function Login() {
  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Авторизация
      </Typography>
      <Typography
        variant="body1"
        fontFamily="Poppins"
        textAlign="center"
        marginBottom={2}
      >
        Введите ваш логин и пароль
      </Typography>

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
        Войти
      </Button>
      <Typography
        sx={{ fontFamily: 'Poppins' }}
        variant="body1"
        fontFamily="Poppins"
      >
        У вас нет аккаунта?
        <span className="incitingText">Регистрация</span>
      </Typography>
    </>
  );
}
