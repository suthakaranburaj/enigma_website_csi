"use client";
import React from "react";
import Layout from "./Layout";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Timeline from "./Timeline";
import Prizes from "./Prizes";
import Footer from "./Footer";
import LokiStyles from "./LokiStyles";
import Guidelines from "./Guidelines";

const LokiHackathon = () => {
  return (
    <>
      <LokiStyles />
      <Layout>
        <Navbar />
        <Hero />
        <About />
        <Timeline />
        <Prizes />
        <Guidelines />
        <Footer />
      </Layout>
    </>
  );
};

export default LokiHackathon;
