import styled from "styled-components";
import BibleDivision, { DivisoesContainer } from "./BibleDivision";
import { bibliaDivisoes } from "../assets/bible-division";

export default function AsideBiblePentateuch({ bibliaBooksAbbrev }) {
  return (
    <DivisoesContainer>
      {Object.keys(bibliaDivisoes).map((key) => (
        <BibleDivision
          key={key}
          booksNames={bibliaDivisoes[key]}
          imgName={key} // O nome da chave aqui
          bibliaBooksAbbrev={bibliaBooksAbbrev}
        />
      ))}
    </DivisoesContainer>
  );
}
