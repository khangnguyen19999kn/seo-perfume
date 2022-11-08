import React, { useState } from "react";

import NewProc from "./../component/NewProc";
import AuthenBanner from "./../component/AuthenBanner";
import ForMan from "./../component/ForMan";
import Carousel from "./../component/Carousels";
import ForWoman from "./../component/ForWomen";
import TopHeader from "../component/Header/TopHeader";
import Navbar from "../component/Header/Navbar";
import Head from "next/head";


export default function Home({ posts }: any) {
  return (
    <>

    <Head>
      <title>Chuan Perfume</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Chuan Perfume" />\
    </Head>
    <div >
      <TopHeader />
      <Navbar />
      <Carousel />
      <NewProc posts={posts} />
      <AuthenBanner />
      {/* <ForMan />
      <ForWoman /> */}

    </div>
    </>
    
  )
}
export async function getStaticProps() {

  const res = await fetch('https://636479368a3337d9a2f7a739.mockapi.io/api/v1/perfumetest')
  const posts = await res.json()


  return {
    props: {
      posts,
    },
  }
}