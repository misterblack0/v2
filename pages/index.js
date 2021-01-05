import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../src/components/Layout';
import Hero from '../src/components/sections/Hero';
import Contact from '../src/components/sections/Contact';
import About from '../src/components/sections/About';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      {/* <Jobs />
      <Featured />
      <Projects /> */}
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
