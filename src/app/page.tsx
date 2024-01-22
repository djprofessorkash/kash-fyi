// Importations for Home Page.

import type { NextPage } from "next";
import Head from "next/head";

// Main Home Page Component.

const Home: NextPage = () => {
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

      {/* Boilerplate HTML to test Next.js integration. */}
      <h1>Hi, I&apos;m Kash!</h1>
    </>
  )
}

export default Home;