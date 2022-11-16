import React, { useState } from "react";
import NewProc from "./../component/NewProc";
import AuthenBanner from "./../component/AuthenBanner";
import Carousel from "./../component/Carousels";
import Head from "next/head";
import type {NewProcProps} from "./../component/NewProc";
import Header from "../component/Header";

export default function Home({ posts }: NewProcProps ) {
  return (
    <>

    <Head>
      <title>Chuan Perfume</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Chuan Perfume" />\
    </Head>
    <div >
      <Header/>
      <div className="mt-[8rem]">

      <Carousel />
      <NewProc posts={posts} />
      <AuthenBanner />
      </div>
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