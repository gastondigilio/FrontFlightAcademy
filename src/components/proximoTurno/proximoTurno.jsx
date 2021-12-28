import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../home/Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function ProximosTurnos() {
  return (
    <React.Fragment>
      <Title>Próximos turnos</Title>
      <Typography component="p" variant="h4">
        3
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Más info
        </Link>
      </div>
    </React.Fragment>
  );
}