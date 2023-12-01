import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

  const authState = useSelector(state => state.auth);

  const { user } = authState;

  return (
    <Navbar expand='lg' bg='primary' variant='dark' className='bg-body-tertiary'>
      <Container fluid>
        <Navbar.Brand as={NavLink} to='home'>GISA-WEB</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Servicio al Personal" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='newEmployee'>Registro de Empleado</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='updateEmployee'>Actualizar Empleado </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Reporte de Asistencias" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='reportByEmployee'>Por Empleado</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='reportByPosition'>Por Día y Cargo</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='reportByDependency'>Por Día y Dependencia</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to='adminUsers'>Administración de Usuarios</Nav.Link>

            <NavDropdown title={user.username} id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='changePassword/:'>Cambiar Contraseña</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='reportByDependency'>Cerrar Sesión</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}
