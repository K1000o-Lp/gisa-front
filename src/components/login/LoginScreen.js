import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  makeStyles
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { login } from '../../actions/auth.actions';
import { CopyRight } from '../ui/CopyRight';



const useStyles = makeStyles((theme) => ({
  screen: {
    height: '100vh',
    width: '100vw',
    flex: 3,
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const LoginScreen = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [valuesForm, handleInputChange, reset] = useForm();

  const { user, error } = authState;
  const { username, password } = valuesForm;

  const handleSubtmit = (e) => {
    e.preventDefault();

    dispatch(login(username, password));
  }

  useEffect(() => {
    user != null && navigate('/home', { replace: true });
  }, [user])

  return (
    <div className={classes.screen}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>
          <form className={classes.form} onSubmit={handleSubtmit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Usuario"
              name="username"
              autoFocus
              error={error?.validation}
              onChange={handleInputChange}
              value={username}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              error={error?.validation}
              helperText={error?.message}
              onChange={handleInputChange}
              value={password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Acceder
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <CopyRight />
        </Box>
      </Container>
    </div>
  );
}