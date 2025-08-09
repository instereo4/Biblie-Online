import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Books from "./pages/Books";
import Chapters from "./pages/Chapters";
import Verses from "./pages/Verses";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:abbrev" element={<Chapters />} />
        <Route path="/books/:abbrev/:chapter" element={<Verses />} />
      </Routes>
    </Router>
  );
}

export default App;
