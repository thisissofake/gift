import * as React from 'react';

import Typography from '@mui/material/Typography';
import { StaticImage } from 'gatsby-plugin-image';

import { Wrapper } from './styled';

function Success() {
  return (
    <Wrapper>
      <Typography variant='h4' gutterBottom>
        Твой подарок ждёт тебя в пункте выдачи OZON по адресу Богатырский
        проспект 60к1!
      </Typography>
      <div style={{ margin: '0 auto 20px', display: 'table' }}>
        <StaticImage alt='Карта' src='./assets/map.png' width={400} />
      </div>
      <Typography variant='h4' gutterBottom>
        Чтобы получить его, покажи работнику штрихкод ниже:
      </Typography>

      <div style={{ margin: '0 auto', display: 'table' }}>
        <StaticImage alt='Штрихкод' src='./assets/barcode.jpg' width={300} />
      </div>

      <Typography style={{ textAlign: 'center' }} variant='h4' gutterBottom>
        С днём рождения!
      </Typography>
    </Wrapper>
  );
}

export default Success;
