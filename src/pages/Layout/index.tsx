import React from 'react';
import Warning from '../Warning';
import Header from '../Header';
import Banner from '../Banner';
import Main from '../Main';
import Releases from '../Releases';
import Footer from '../Footer';
import {
  Container,
  WarningWrapper,
  HeaderWrapper,
  BannerWrapper,
  ReleasesWrapper,
  MainWrapper,
  FooterWrapper,
} from './styled';

const Layout: React.FC = () => {
  return (
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
      </FooterWrapper>
    </Container>
  );
};

export default Layout;
