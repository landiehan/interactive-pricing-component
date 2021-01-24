import { useState } from "react";
import styled from "styled-components";
import RangeInput from "./RangeInput";
import Switcher from "./Switcher";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  justify-items: center;
  row-gap: 30px;
  padding: 20px 10px;
  grid-template-areas:
    "pageviews"
    "rangeInput"
    "price"
    "switcher";
  @media only screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      "pageviews price"
      "rangeInput rangeInput"
      "switcher switcher";
  }
`;

const Pageviews = styled.label`
  color: ${(props) => props.theme.text};
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
  grid-area: pageviews;
  align-self: center;
`;

const Price = styled.span`
  color: ${(props) => props.theme.text};
  font-size: 15px;
  grid-area: price;
`;

const PriceNum = styled.span`
  color: ${(props) => props.theme.primaryText};
  font-size: 36px;
  font-weight: 800;
  vertical-align: sub;
`;

const CardMain = () => {
  const [quote, setQuote] = useState({ pageviews: "100k", price: 16 });

  const handleQuoteChange = (e) => {
    const input = e.target.value;
    if (input < 1) {
      return setQuote({ pageviews: "10k", price: 8 });
    }
    if (input < 2) {
      return setQuote({ pageviews: "50k", price: 12 });
    }
    if (input < 3) {
      return setQuote({ pageviews: "100k", price: 16 });
    }
    if (input < 4) {
      return setQuote({ pageviews: "500k", price: 24 });
    }
    if (input < 5) {
      return setQuote({ pageviews: "1m", price: 36 });
    }
    // switch (input) {
    //   case "1":
    //     return setQuote({ pageviews: "10k", price: 8 });
    //   case "2":
    //     return setQuote({ pageviews: "50k", price: 12 });
    //   case "3":
    //     return setQuote({ pageviews: "100k", price: 16 });
    //   case "4":
    //     return setQuote({ pageviews: "500k", price: 24 });
    //   case "5":
    //     return setQuote({ pageviews: "1m", price: 36 });
    //   default:
    //     break;
    // }
  };

  const [discount, setDiscount] = useState(false);

  return (
    <Container>
      <Pageviews>{quote.pageviews} Pageviews</Pageviews>
      <RangeInput
        min="0.1"
        max="5.1"
        step="0.01"
        onChange={handleQuoteChange}
      />
      <Price>
        <PriceNum>
          ${discount ? (quote.price * 0.75).toFixed(2) : quote.price.toFixed(2)}
          &nbsp;
        </PriceNum>
        / month
      </Price>
      <Switcher setDiscount={setDiscount} />
    </Container>
  );
};

export default CardMain;
