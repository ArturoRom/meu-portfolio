interface ConteudoComponenteProps {
  titulo: string;
  children: any
}

export default function ConteudoComponente(props: ConteudoComponenteProps) {
  return (
    <div className="conteudo">
      <h1>{props.titulo}</h1>
      <input type="text" placeholder="Pesquisar"></input>
      <button>Pesquisar</button>
      <br />
      <br />
      {props.children}
    </div>
  );
}
