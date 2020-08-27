/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { VscColorMode } from 'react-icons/vsc';
import Warning from '../../components/Warning';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Main from '../../components/Main';
import Releases from '../../components/Releases';
import Footer from '../../components/Footer';
import {
  Container,
  WarningWrapper,
  HeaderWrapper,
  BannerWrapper,
  ReleasesWrapper,
  MainWrapper,
  FooterWrapper,
} from './styled';

import * as themes from '../../globals/utils';

const {
  themes: { Dark, Light },
} = themes;

const Layout: React.FC = () => {
  const [theme, setTheme] = useState('light');

  function handleAlterTheme(): void {
    const { localStorage } = window;
    const { style } = document.body;

    if (theme === 'light') {
      style.background = Dark.body;
      style.transition = 'all 0.25s linear';
      style.color = Dark.text;
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      style.background = Light.body;
      style.transition = 'all 0.25s linear';
      style.color = Light.text;
      setTheme('light');
    }
  }
  useEffect(() => {
    const themes = window.localStorage.getItem('theme');
    themes && setTheme(themes);
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? Dark : Light}>
      <Container>
        <WarningWrapper>
          <Warning />
        </WarningWrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BannerWrapper>
          <Banner />
        </BannerWrapper>
        <ReleasesWrapper>
          <Releases />
        </ReleasesWrapper>
        <MainWrapper>
          <Main />
        </MainWrapper>
        <FooterWrapper>
          <Footer />
          <button type="button" onClick={handleAlterTheme}>
            <VscColorMode />
          </button>
        </FooterWrapper>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
