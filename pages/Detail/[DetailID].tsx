import Head from "next/head";
import * as React from "react";
import Header from "../../component/Header";
import MainDetail, { DetailPro } from "../../component/MainDetai";

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
export async function getStaticPaths() {
  const res = await fetch(
    `https://636479368a3337d9a2f7a739.mockapi.io/api/v1/perfumetest`
  );

  const posts = await res.json();

  const paths = posts.map((post: any) => ({
    params: { DetailID: post.id.toString() },
  }));
  // console.log(paths)
  return { paths, fallback: false };
}

export async function getStaticProps(context: any) {
  const { DetailID } = context.params;
  const res = await fetch(
    `https://636479368a3337d9a2f7a739.mockapi.io/api/v1/perfumetest/${DetailID}`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
      revalidate: 10,
    },
  };
}
