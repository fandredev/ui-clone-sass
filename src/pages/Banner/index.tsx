import React from 'react';
import { Container } from './styled';
import glass from '../../assets/images/glass.svg';

const Banner: React.FC = () => {
  return (
    <Container>
      <p>Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>
      <figure>
        <img src={glass} alt="Imagem ilustrativa de um óculos" />
      </figure>
    </Container>
  );
};

export default Banner;
