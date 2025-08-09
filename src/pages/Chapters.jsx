import { useParams, Link } from "react-router-dom";
import biblia from "../biblia-almeida.json";

export default function ChaptersPage() {
  const { abbrev } = useParams();
  const livro = biblia.find((l) => l.abbrev === abbrev);

  if (!livro) return <p>Livro não encontrado</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{livro.name} - Capítulos</h2>
      {livro.chapters.map((_, i) => (
        <div key={i}>
          <Link to={`/books/${abbrev}/${i + 1}`}>Capítulo {i + 1}</Link>
        </div>
      ))}
    </div>
  );
}
