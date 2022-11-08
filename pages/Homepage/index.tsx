/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import TopHeader from "../../component/TopHeader";
import Navbar from "../../component/Navbar";
import NewProc from "../../component/NewProc";
import AuthenBanner from "../../component/AuthenBanner";
import ForMan from "../../component/ForMan";
import Carousel from "../../component/Carousels";
import ForWoman from "../../component/ForWomen";

export default function index({ posts }: any) {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <Carousel />
      <NewProc posts={posts} />
      <AuthenBanner />
      <ForMan />
      <ForWoman />
    </div>
  );
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
