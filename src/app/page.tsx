// General Importations for Home Page.

import type { NextPage } from "next";
import Head from "next/head";

// Component Container Importations for Home Page.

import NavBar from "./components/containers/Navbar/navbar";
import Footer from "./components/containers/Footer/footer";

// Main Home Page Component.

const Home: NextPage = () => {
  const defaultColor = "text-bone"
  return (
    <>
      {/* Project header data. */}
      <Head>
        <title>kash.fyi</title>
        <meta
          name="description"
          content="My professional portfolio showcasing my prior and active work."
        ></meta>
      </Head>

      {/* Navigational bar as header of web page. */}
      <NavBar />

      {/* Boilerplate footer bar at bottom of web page. */}
      <Footer />
    </>
  )
}

export default Home;