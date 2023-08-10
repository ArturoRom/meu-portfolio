import { listaPost } from "@/database/PostDatabase";
import { Post } from "@/interface/Post";

export default function PostListComponent() {
  // Fazer um componente para o Post individual
  function renderizarPostagens(item: Post) {
    return (
      <div key={0} className="post">
        <img src={item.Photo} />
        <p>
          Likes: {item.likes} - {item.Autor}
        </p>
      </div>
    );
  }

  return (
    <section className="post-section">
      {listaPost.map((item) => renderizarPostagens(item))}
    </section>
  );
}
