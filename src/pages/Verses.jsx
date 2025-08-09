import { useParams } from "react-router-dom";
import biblia from "../biblia-almeida.json";

export default function VersesPage() {
  const { abbrev, chapter } = useParams();
  const livro = biblia.find((l) => l.abbrev === abbrev);

  if (!livro) return <p>Livro não encontrado</p>;

  const capitulo = livro.chapters[parseInt(chapter) - 1];
  if (!capitulo) return <p>Capítulo inválido</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>
        {livro.name} - Capítulo {chapter}
      </h2>
      {capitulo.map((verso, i) => (
        <p key={i}>{verso}</p>
      ))}
    </div>
  );
}
