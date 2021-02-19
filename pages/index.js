import React from "react";
import Head from "next/head";
import Layout from "../src/components/layout";
import Hero from "../src/components/sections/Hero";
import About from "../src/components/sections/About";
import Projects from "../src/components/sections/Projects";

const IndexPage = () => (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta
                name="description"
                content="Marius Ciocoiu is a web developer specializing in building elegant, performant and accessible digital experiences."
            />
            <title>Marius Ciocoiu – Web Developer</title>
        </Head>
        <Layout>
            <main>
                <Hero />
                <About />
                <Projects />
            </main>
        </Layout>
    </>
);

export default IndexPage;
