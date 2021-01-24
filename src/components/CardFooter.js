import styled from "styled-components";
import iconCheck from "../assets/icon-check.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  border-top: 1px solid ${(props) => props.theme.borderLine};
  padding: 20px 0;
  @media only screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
`;

const Feature = styled.li`
  &::before {
    content: url(${iconCheck});
    margin-right: 20px;
  }
  color: ${(props) => props.theme.text};
  font-size: 14px;

  & + & {
    margin-top: 8px;
  }
`;

const Button = styled.button`
  border: none;
  color: ${(props) => props.theme.ctaText};
  background-color: ${(props) => props.theme.ctaBackground};
  padding: 10px 30px;
  border-radius: 9999px;
  font-size: 14px;
  text-decoration: none;
  margin: 20px 0;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const CardFooter = () => {
  return (
    <Container>
      <FeaturesList>
        <Feature>Unlimited websites</Feature>
        <Feature>100% data ownership</Feature>
        <Feature>Email reports</Feature>
      </FeaturesList>
      <Button as="a" href="/">
        Start my trial
      </Button>
    </Container>
  );
};

export default CardFooter;
