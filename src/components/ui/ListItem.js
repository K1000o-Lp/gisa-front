import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from "@material-ui/core";
import {
  Assignment,
  BarChart,
  Dashboard,
  Layers,
  People,
  ShoppingCart
} from "@material-ui/icons";
import { Link } from "react-router-dom";


export const MainListItems = (
  <div>
    <ListItem component={Link} to='home' button>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem component={Link} to='newEmployee' button>
      <ListItemIcon>
        <ShoppingCart />
      </ListItemIcon>
      <ListItemText primary="Nuevo Empleado" />
    </ListItem>
    <ListItem component={Link} to='updateEmployee' button>
      <ListItemIcon>
        <People />
      </ListItemIcon>
      <ListItemText primary="Actualizar Empleado" />
    </ListItem>
  </div>
);

export const SecondaryListItem = (
  <div>
    <ListSubheader inset>Reportes</ListSubheader>
    <ListItem component={Link} to='reportDay' button>
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="Reporte Diario" />
    </ListItem>
    <ListItem component={Link} to='reportMonth' button>
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="Reporte Mensual" />
    </ListItem>
    <ListItem component={Link} to='reportPosition' button>
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="Reporte por Posición" />
    </ListItem>
  </div>
);