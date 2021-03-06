import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Link from '@mui/material/Link';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        {/* <DashboardIcon /> */}
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        {/* <ShoppingCartIcon /> */}
      </ListItemIcon>
      <ListItemText primary="Mis turnos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        {/* <PeopleIcon /> */}
      </ListItemIcon>
      <ListItemText primary="Mis vuelos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        {/* <BarChartIcon /> */}
      </ListItemIcon>
      <Link href='/perfil' target="_self">
      <ListItemText primary="Perfil" />
    </Link>
    </ListItem>
    {/* <ListItem button>
    asd
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem> */}
  </div>
);

export const secondaryListItems = (
  <div>
     <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> 
  </div>
);