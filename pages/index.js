import React from "react";
import Head from "next/head";
import Layout from "../src/components/layout";
import Hero from "../src/components/sections/Hero";
import Contact from "../src/components/sections/Contact";
import About from "../src/components/sections/About";
import Projects from "../src/components/sections/Projects";

const IndexPage = () => (
    <>
        <Head>
            <title>Marius Ciocoiu</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Layout>
            <main className="fillHeight">
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
        </Layout>
    </>
);

export default IndexPage;
