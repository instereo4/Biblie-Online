import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <h1>Bem-vindo à Bíblia</h1>
      <Link to="/books">Listar todos os Livros</Link>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "auto",
          flexWrap: "wrap",
        }}
      ></div>
    </div>
  );
}
