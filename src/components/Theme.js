import { createGlobalStyle, ThemeProvider } from "styled-components";

const themes = {
  emptySliderBar: "hsl(224, 65%, 95%)",
  fullSliderBar: "hsl(174, 77%, 80%)",
  sliderBackround: "hsl(174, 86%, 45%)",
  sliderShadow: "rgba(16, 213, 194, 0.3)",
  cardShadow: "0px 20px 30px -15px rgba(189, 204, 255, 0.45)",

  discountText: "hsl(15, 100%, 70%)",
  discountBackground: "hsl(14, 92%, 95%)",

  ctaText: "hsl(226, 100%, 87%)",
  ctaBackground: "hsl(227, 35%, 25%)",

  mainBackground: "hsl(230, 100%, 99%)",
  pricingComponentBackground: "hsl(0, 0%, 100%)",
  toggleBackground: "hsl(223, 50%, 87%)",

  text: "hsl(225, 20%, 60%)",
  primaryText: "hsl(227, 35%, 25%)",
  borderLine: "rgba(51, 102, 255, .1)",
};

const GlobalStyle = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: 'Manrope', sans-serif;
  }
`;

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
