import React, { useState } from 'react';
import { Container } from './styled';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  return (
    <Container>
      <img src={logo} alt="Imagem do logotipo do pré processador SASS." />

      <ol>
        <li>
          <Link to="#">Install</Link>
        </li>
        <li>
          <Link to="#">Learn Sass</Link>
        </li>
        <li>
          <Link to="#">Blog</Link>
        </li>
        <li>
          <Link to="#">Documentation</Link>
        </li>
        <li>
          <Link to="#">Get Involved</Link>
        </li>
        <li>
          <form>
            <input
              type="text"
              placeholder="Search"
              aria-required="false"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              id="search"
            />
          </form>
        </li>
      </ol>
      <h1>CSS With Superpowers</h1>
    </Container>
  );
};

export default Header;
