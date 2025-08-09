import styled from "styled-components";

const ImgWrap = styled.div`
  z-index: 1;
  width: fit-content;
  height: 180px;
`;
const BgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: grayscale(100%);
  transition: filter 0.25s ease-in;
`;
const AnimatedImg = styled.img`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  top: 50%;
  left: 50%;
  filter: blur(2px);
  filter: grayscale(80%);
  transform: translateX(-50%) translateY(10%);
  transition: transform 0.25s cubic-bezier(0.18, 0.77, 0.85, 0.97),
    filter 0.25s ease-in;
`;
const SpanWrapper = styled.div`
  z-index: 2;
  width: 100%;
  background: #1c1c1ef3; /* cor semi-transparente */
  border-top: 3px solid ${(props) => props.theme.colors.border};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  text-shadow: 1px 1px 1px #1c1c1e;
  &::first-letter {
    text-transform: uppercase;
  }
`;
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 12px;
  width: 140px;
  max-height: 300px;
  margin-top: auto;
  box-shadow: 0px 0px 4px 0px #000000c9;
  -webkit-box-shadow: 0px 0px 4px 0px #000000c9;
  -moz-box-shadow: 0px 0px 4px 0px #000000c9;
  transition: transform 0.125s ease-in, box-shadow 0.125s ease-in;
  &:hover ${BgImg} {
    filter: grayscale(0%);
  }
  &:hover ${AnimatedImg} {
    transform: translateX(-50%) translateY(-50%);
    filter: blur(0);
    filter: grayscale(0%);
  }
  &:hover {
    transform: translateY(-14px);
    box-shadow: 0px 8px 4px 0px #000000c9;
    -webkit-box-shadow: 0px 8px 4px 0px #000000c9;
    -moz-box-shadow: 0px 8px 4px 0px #000000c9;
  }
`;

export default function BooksContainer({ name, imgName }) {
  const imagePath = `/imgs/${imgName}.png`;
  const animatedImagePath = `/imgs/${imgName}_animated.png`;
  return (
    <Container>
      <ImgWrap>
        <BgImg src={imagePath} alt={`Capa de ${name}`} />
      </ImgWrap>
      <AnimatedImg src={animatedImagePath} alt={`Capa de ${name} animated`} />
      <SpanWrapper>
        <Span>{name}</Span>
      </SpanWrapper>
    </Container>
  );
}
