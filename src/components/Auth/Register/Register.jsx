import { TextField, Button, Typography } from '@mui/material';

export default function RegisterPage() {
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
        type="text"
        name="name"
        id="outlined-basic"
        label="Username"
        variant="outlined"
        placeholder="Введите ваш username"
        fullWidth={true}
        margin={'normal'}
      />
      <TextField
        type="email"
        name="email"
        id="outlined-basic"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        fullWidth={true}
        margin={'normal'}
      />
      <TextField
        name="password"
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
        type="submit"
      >
        Регистрация
      </Button>
      {/* <Typography
        sx={{ fontFamily: 'Poppins' }}
        variant="body1"
        fontFamily="Poppins"
      >
        У вас есть аккаунт?
        <span className="incitingText">Авторизация</span>
      </Typography> */}
    </>
  );
}
