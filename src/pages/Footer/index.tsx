import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styled';
const Footer: React.FC = () => {
  return (
    <Container>
      <p>
        Sass © 2006–2020 the Sass team, and numerous contributors. It is available for use and modification under the
        <strong>&nbsp;MIT License.</strong>
      </p>
      <ol>
        <li>
          <Link to="#">Sass on Github</Link>
        </li>
        <li>
          <Link to="#">Website Source Code</Link>
        </li>
        <li>
          <Link to="#">Style Guide</Link>
        </li>
        <li>
          <Link to="#">Community Guidelines</Link>
        </li>
      </ol>
    </Container>
  );
};

export default Footer;
