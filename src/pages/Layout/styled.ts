import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: 1fr;
    grid-template-areas:
      'warning'
      'header'
      'banner'
      'releases'
      'main'
      'footer';
  }
`;
export const WarningWrapper = styled.section`
  grid-area: warning;
`;
export const HeaderWrapper = styled.header`
  grid-area: header;
`;
export const BannerWrapper = styled.section`
  grid-area: banner;
`;
export const ReleasesWrapper = styled.aside`
  grid-area: releases;
`;
export const MainWrapper = styled.main`
  grid-area: main;
`;
export const FooterWrapper = styled.footer`
  grid-area: footer;
`;
