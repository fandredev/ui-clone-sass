import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styled';

const Releases: React.FC = () => (
  <Container>
    <ol>
      <li>
        <Link style={{ textDecoration: 'none', cursor: 'default' }} to="#">
          {/* coisa feia */}
          Current Releases:
        </Link>
      </li>
      <li>
        <Link to="#">Dart Sass&nbsp; 1.26.10</Link>
      </li>
      <li>
        <Link to="#">LibSass&nbsp; 3.6.4</Link>
      </li>
      <li>
        <Link to="#">Ruby Sass</Link>
      </li>
      <li>
        <Link to="#">Implementation Guide</Link>
      </li>
    </ol>
  </Container>
);

export default Releases;
