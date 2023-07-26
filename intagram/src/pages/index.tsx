import { stories } from "@/database/StoriesDatabase";
import { UserStory } from "@/interface/UserStory";
import Head from "next/head";

export default function Home() {
  function renderizarItemDoStorie(item: UserStory) {
    // Operador ternário
    const classes = item.haveBeenSeen ? "ativa" : "";

    return (
      <div className="item" key={item.id}>
        <img className={classes} src={item.urlPhoto} alt="" />
        <p>{item.userName}</p>
      </div>
    );
  }

  // Quero a listagem de postagem agora
  // a postagem terá autor, foto, texto, quantidade de likes

  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <section>{stories.map((item) => renderizarItemDoStorie(item))}</section>
    </>
  );
}
