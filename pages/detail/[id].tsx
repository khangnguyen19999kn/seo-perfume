import axios from "axios";
import { GetStaticPaths } from "next";
import Head from "next/head";
import * as React from "react";
import Header from "../../component/Header";
import MainDetail, { DetailPro } from "../../component/MainDetai";
import rateLimit from 'axios-rate-limit';

export default function App({ posts }: DetailPro) {
  return (
    <>
      <Head>
        <title>Detail Product</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="This is detail Product" />\
      </Head>
      <div>
        <Header />
        <MainDetail posts={posts} />
        {/* <Carousel posts={posts}/>
         */}
      </div>
    </>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://636479368a3337d9a2f7a739.mockapi.io/api/v1/perfumetest`
  );

  const posts = await res.json();

  const paths = posts.map((post: any) => ({
    params: { id: post.id.toString() },
  }));
  console.log(paths);
  return { paths, fallback: false };
};

export async function getStaticProps({ params }: any) {

  const { id } = params;
  const res = await fetch(
    `https://636479368a3337d9a2f7a739.mockapi.io/api/v1/perfumetest/${id}`
  );
  const posts = await res.json();

  return {
    props: {
      posts: posts,
    },
    revalidate: 1,
  };
}
