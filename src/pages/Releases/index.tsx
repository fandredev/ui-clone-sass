import React from 'react';
import { Container } from './styled';
import { Link } from 'react-router-dom';

const Releases: React.FC = () => {
  return (
    <Container>
      <ol>
        <li>
          <Link to="#">Current Releases:</Link>
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
};

export default Releases;
