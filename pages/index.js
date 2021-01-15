import React from "react";
import Layout from "../src/components/layout";
import Hero from "../src/components/sections/Hero";
import Contact from "../src/components/sections/Contact";
import About from "../src/components/sections/About";
import Projects from "../src/components/sections/Projects";

const IndexPage = () => (
    <Layout className="fillHeight">
        <Hero />
        <main>
            <About />
            <Projects />
        </main>
        <Contact />
    </Layout>
);

export default IndexPage;
