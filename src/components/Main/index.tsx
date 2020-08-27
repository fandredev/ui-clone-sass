import React from 'react';
import { Container, WrapperItem } from './styled';
const Main: React.FC = () => {
  return (
    <Container>
      <WrapperItem>
        <span>CSS Compatible</span>
        <p>
          Sass is completely compatible with all versions of CSS. We take this compatibility seriously, so that you can
          seamlessly use any available CSS libraries.
        </p>
      </WrapperItem>
      <WrapperItem>
        <span>Feature Rich</span>
        <p>
          Sass boasts more features and abilities than any other CSS extension language out there. The Sass Core Team
          has worked endlessly to not only keep up, but stay ahead.
        </p>
      </WrapperItem>
      <WrapperItem>
        <span>Mature</span>
        <p>Sass has been actively supported for over 13 years by its loving Core Team.</p>
      </WrapperItem>
      <WrapperItem>
        <span>Industry Approved</span>
        <p>Over and over again, the industry is choosing Sass as the premier CSS extension language.</p>
      </WrapperItem>
      <WrapperItem>
        <span>Large Community</span>
        <p>
          Sass is actively supported and developed by a consortium of several tech companies and hundreds of developers.
        </p>
      </WrapperItem>
      <WrapperItem>
        <span>Frameworks</span>
        <p>
          There are an endless number of frameworks built with Sass. <strong>Compass </strong>,&nbsp;
          <strong>Bourbon </strong>, and <strong>Susy</strong> just to name a few.
        </p>
      </WrapperItem>
    </Container>
  );
};

export default Main;
