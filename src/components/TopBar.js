import styled from "styled-components";
import patternCircles from "../assets/pattern-circles.svg";

const Container = styled.header`
  padding: 8em 0 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: url(${patternCircles});
  background-repeat: no-repeat;
  background-position: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.primaryText};
`;

const TagLine = styled.p`
  color: ${(props) => props.theme.text};
  margin: 1em 0;
  line-height: 1.5;
  font-size: 15px;
`;

const BlockSpan = styled.span`
  display: block;
  @media only screen and (min-width: 376px) {
    display: unset;
  }
`;

const TopBar = () => {
  return (
    <Container>
      <Title>Simple, traffic-based pricing</Title>
      <TagLine>
        Sign-up for our 30-day trial.&nbsp;
        <BlockSpan>No credit card required.</BlockSpan>
      </TagLine>
    </Container>
  );
};

export default TopBar;
