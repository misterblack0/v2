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
            <meta property="og:title" content="OnChain Data" key="title" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Layout>
            <Hero />
            <main className="fillHeight">
                <About />
                <Projects />
            </main>
            <Contact />
        </Layout>
    </>
);

export default IndexPage;
