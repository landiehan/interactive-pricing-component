import styled from "styled-components";
import CardFooter from "./CardFooter";
import CardMain from "./CardMain";

const Container = styled.div`
  width: 90%;
  margin: 0 auto 30px;
  @media only screen and (min-width: 576px) {
    max-width: 576px;
  }
  background-color: ${(props) => props.theme.pricingComponentBackground};
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.cardShadow};
`;

const Card = () => {
  return (
    <Container>
      <CardMain />
      <CardFooter />
    </Container>
  );
};

export default Card;
