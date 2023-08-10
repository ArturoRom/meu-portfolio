import { listaPost } from "@/database/PostDatabase";
import Head from "next/head";
import { Post } from "@/interface/Post";
import StoriesListComponent from "@/components/StoriesListComponent";
import PostListComponent from "@/components/PostListComponent";

export default function Home() {
  function adicionarPostagem() {
    const postNovo: Post = {
      Autor: "Eu",
      Photo: "https://picsum.photos/506/506",
      Text: "Texto",
      likes: 0,
    };

    listaPost.push(postNovo);
  }
  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <StoriesListComponent />
      <hr></hr>
      <button onClick={() => adicionarPostagem()}>Adicionar</button>
      <PostListComponent />
    </>
  );
}
