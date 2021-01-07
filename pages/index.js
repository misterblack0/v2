import React from 'react';
import styled from 'styled-components';
import Layout from '../src/components/layout';
import Hero from '../src/components/sections/Hero';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = () => (
  <Layout>
    <StyledMainContainer className="fillHeight">
      <Hero />
    </StyledMainContainer>
  </Layout>
);

export default IndexPage;
