interface MeuPrimeiroComponenteProps {
	link: string,
	titulo: string,
	subtitulo: string
}


export default function MeuPrimeiroComponente(props: MeuPrimeiroComponenteProps) {
  return (
    <a href={props.link} target="_blank">
      <h2>{props.titulo}</h2>
      <p>{props.subtitulo}</p>
    </a>
  );
}