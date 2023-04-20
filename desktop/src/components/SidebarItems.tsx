import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Dashboard, Event, People, Pets, PointOfSale } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const sidebarItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItemButton>
    <ListItemButton component={Link} to="/sales">
      <ListItemIcon>
        <PointOfSale />
      </ListItemIcon>
      <ListItemText primary="Caja" />
    </ListItemButton>
    <ListItemButton component={Link} to="/appointments">
      <ListItemIcon>
        <Event />
      </ListItemIcon>
      <ListItemText primary="Citas" />
    </ListItemButton>
    <ListItemButton component={Link} to="/patients">
      <ListItemIcon>
        <Pets />
      </ListItemIcon>
      <ListItemText primary="Pacientes" />
    </ListItemButton>
    <ListItemButton component={Link} to="/clients">
      <ListItemIcon>
        <People />
      </ListItemIcon>
      <ListItemText primary="Clientes" />
    </ListItemButton>
  </React.Fragment>
);

export const secondarySidebarItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
