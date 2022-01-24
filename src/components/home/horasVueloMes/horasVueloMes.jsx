import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function HorasVuelosMes() {
  return (
    <React.Fragment>
      <Title>Hs. de vuelo este mes</Title>
      <Typography component="p" variant="h4">
        40.7
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