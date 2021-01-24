import styled from "styled-components";
import Theme from "./components/Theme";
import TopBar from "./components/TopBar";
import bgPattern from "./assets/bg-pattern.svg";
import Card from "./components/Card";

const Container = styled.div`
  min-height: 100vh;
  max-width: 375px;
  margin: 0 auto;
  @media only screen and (min-width: 568px) {
    max-width: 1440px;
  }

  background-color: ${(props) => props.theme.mainBackground};
  background-image: url(${bgPattern});
  background-repeat: no-repeat;
`;

const App = () => {
  return (
    <Theme>
      <Container>
        <TopBar />
        <Card />
      </Container>
    </Theme>
  );
};

export default App;
