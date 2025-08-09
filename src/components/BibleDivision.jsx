import styled from "styled-components";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0px;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 1em;
  cursor: pointer;
  &:hover {
    background-color: #0000001c;
  }
`;
const SvgWrapper = styled.div`
  height: auto;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SvgImg = styled.img`
  height: auto;
  width: 100%;
`;
const DivisionTitle = styled.h2`
  text-transform: capitalize;
  /* &::first-letter {
    text-transform: capitalize;
  } */
`;
const BooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: ${({ $expanded }) => ($expanded ? "500px" : "0")};
  opacity: ${({ $expanded }) => ($expanded ? 1 : 0)};
  transform: ${({ $expanded }) =>
    $expanded ? "translateY(0)" : "translateY(-20px)"};
  transition: max-height 0.125s ease, opacity 0.125s ease, transform 0.125s ease;
`;
const BooksTitle = styled.h4`
  padding-inline-start: 42px;
  text-transform: capitalize;
  &:hover {
    background-color: #0000001c;
  }
`;

export const DivisoesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 0px;
`;

export default function BibleDivision({
  booksNames,
  imgName,
  bibliaBooksAbbrev,
}) {
  const normalizeText = (texto) => {
    return String(texto)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };
  const [expanded, setExpanded] = useState(false);
  const imagePath = `/svgs/biblia-${normalizeText(imgName)}.svg`;
  console.log(bibliaBooksAbbrev);

  const arrowStyle = { marginLeft: "auto", minWidth: "16px" };

  const handleToggle = () =>
    setExpanded((prev) => {
      return !prev;
    });
  return (
    <Container>
      <Header onClick={handleToggle}>
        <SvgWrapper>
          <SvgImg src={imagePath} alt={`Capa de ${imgName}`} />
        </SvgWrapper>
        <DivisionTitle>{imgName.replace(/_/g, " ")}</DivisionTitle>
        {expanded ? (
          <IoIosArrowUp style={arrowStyle} />
        ) : (
          <IoIosArrowDown style={arrowStyle} />
        )}
      </Header>

      <BooksContainer $expanded={expanded}>
        {booksNames.map((bookname, index) => {
          console.log("testando nome:", bookname, bibliaBooksAbbrev[bookname]);
          return bibliaBooksAbbrev[bookname] ? (
            <Link to={`/books/${bibliaBooksAbbrev[bookname]}`}>
              <BooksTitle key={index}>{bookname}</BooksTitle>
            </Link>
          ) : (
            "Error"
          );
        })}
      </BooksContainer>
    </Container>
  );
}
