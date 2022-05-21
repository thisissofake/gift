import * as React from 'react';

import Typography from '@mui/material/Typography';
import { StaticImage } from 'gatsby-plugin-image';

import { Wrapper } from './styled';

function Success() {
  return (
    <Wrapper>
      <Typography variant='h4' gutterBottom>
        Твой подарок сейчас в пути!
      </Typography>
      <Typography variant='h4' gutterBottom>
        Заходи сюда 26 мая в 15:00, будет интересно
      </Typography>

      <StaticImage alt='Опять ждать' src='./assets/zhdun.png' width={400} />
    </Wrapper>
  );
}

export default Success;
