import React from 'react';
import styled from 'styled-components';
import Layout from '../src/components/layout';
import Hero from '../src/components/sections/Hero';
import Contact from '../src/components/sections/Contact';

const StyledMainContainer = styled.main`
    counter-reset: section;
`;

const IndexPage = () => (
    <Layout>
        <Hero />
        <StyledMainContainer className="fillHeight"></StyledMainContainer>
        <Contact />
    </Layout>
);

export default IndexPage;
