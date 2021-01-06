import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../src/components/Layout';
import Hero from '../src/components/sections/Hero';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
