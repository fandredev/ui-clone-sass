import React from 'react';
import { Container, DivColors } from './styled';
const Warning: React.FC = () => {
  return (
    <>
      <Container>
        <h5>Black Lives Matter</h5>
        <p>
          Sass stands with the protesters against police violence. We encourage our users to{' '}
          <strong>get in the streets and join them if you can.</strong>
        </p>
      </Container>
      <DivColors />
    </>
  );
};

export default Warning;
