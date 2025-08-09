import { Link } from "react-router-dom";
import biblia from "../biblia-almeida.json";
import BooksContainer from "../components/BooksContainer";
import AsideBiblePentateuch from "../components/AsideBiblePentateuch";

export default function BooksPage() {
  const bibliaBooksAbbrev = biblia.reduce((acc, items) => {
    acc[items.name] = items.abbrev; // ou items.name, dependendo do que você quer como chave
    return acc;
  }, {});

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          position: "relative",
        }}
      >
        <aside>
          <AsideBiblePentateuch
            bibliaBooksAbbrev={bibliaBooksAbbrev}
          ></AsideBiblePentateuch>
        </aside>
        <div
          style={{
            padding: "10px 30px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            flex: "1",
          }}
        >
          <h2 style={{ marginBottom: "40px" }}>Livros da Bíblia</h2>
          <div className="books">
            {biblia.map((livro) => (
              <div key={livro.abbrev}>
                <Link to={`/books/${livro.abbrev}`}>
                  <BooksContainer name={livro.name} imgName={livro.abbrev} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
