import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Card, Container, Form, InputGroup, Row } from 'react-bootstrap';

import { useForm } from '../../hooks/useForm';
import { login } from '../../actions/auth.actions';

export const LoginScreen = () => {
  const navigate = useNavigate();
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [valuesForm, handleInputChange] = useForm();

  const { user, error } = authState;
  const { username, password } = valuesForm;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(username, password));
  }

  useEffect(() => {
    user != null && navigate('/home', { replace: true });
  }, [user])

  return (
    <Container>
      <Row
        className='justify-content-center align-items-center'
        style={{
          height: '100vh',
        }}
      >
        <Card
          style={{
            minWidth: 400
          }}
        >
          <Card.Header>
            Inicia Sesión
          </Card.Header>

          <Card.Title>
            <div
              className='d-flex justify-content-center m-3'
            >
              Aquí Icono
            </div>
          </Card.Title>

          <Card.Body>
            {
              error?.validation
              && (
                <Alert variant='danger'>
                  {error.message}
                </Alert>
              )
            }

            <Form onSubmit={handleSubmit}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" className='material-icons'>person</InputGroup.Text>
                <Form.Control
                  placeholder="Usuario"
                  aria-label="Usuario"
                  aria-describedby="basic-addon1"
                  name='username'
                  value={username}
                  onChange={handleInputChange}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2" className='material-icons'>lock</InputGroup.Text>
                <Form.Control
                  placeholder="Contraseña"
                  aria-label="Contraseña"
                  aria-describedby="basic-addon2"
                  type='password'
                  name='password'
                  value={password}
                  onChange={handleInputChange}
                />
              </InputGroup>

              <Button
                className='btn-block'
                type='submit'
                variant='primary'
                size='lg'
              >
                Acceder
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}