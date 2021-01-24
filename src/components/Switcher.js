import styled from "styled-components";

const SwitcherContainer = styled.form`
  grid-area: switcher;
  margin-bottom: 20px;
  @media only screen and (min-width: 576px) {
    justify-self: end;
    margin-right: 60px;
    margin-top: 25px;
  }
`;

const RadioGroup = styled.fieldset.attrs({ "aria-label": "select a plan" })`
  border: none;
`;

const RadioInput = styled.input.attrs({ type: "radio" })`
  position: relative;
  z-index: 1;
  width: 50%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const Label = styled.label`
  color: ${(props) => props.theme.text};
  font-size: 14px;
  cursor: pointer;
`;

const LabelWithDiscount = styled(Label)`
  &::after {
    content: "-25%";
    font-size: 12px;
    display: inline-block;
    padding: 2px 4px;
    margin-left: 10px;
    color: ${(props) => props.theme.discountText};
    background-color: ${(props) => props.theme.discountBackground};
    border-radius: 9999px;
  }
  @media only screen and (min-width: 576px) {
    &::after {
      content: "25% discount";
    }
  }
`;

const Toggle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  width: 50px;
  height: 24px;
  border-radius: 24px;
  position: relative;
  vertical-align: middle;
  margin: 0 14px;
`;

const ToggleBackground = styled.span`
  position: absolute;
  z-index: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.toggleBackground};
  border-radius: 24px;
  ${RadioInput}:hover ~ & {
    background-color: ${(props) => props.theme.sliderBackround};
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  z-index: 2;
  left: 4px;
  right: calc(100% - 4px);
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
  transition: all 0.4s;
  #yearly:checked ~ & {
    left: calc(100% - 20px);
    right: 4px;
  }
`;

const Switcher = ({ setDiscount }) => {
  const handleSubscribeSwitch = (e) => {
    const discount = e.target.value === "yearly" ? true : false;
    setDiscount(discount);
  };

  return (
    <SwitcherContainer>
      <RadioGroup>
        <Label htmlFor="monthly">Monthly Billing</Label>
        <Toggle>
          <RadioInput
            id="monthly"
            name="subscribe"
            value="monthly"
            onChange={handleSubscribeSwitch}
            defaultChecked
          />
          <RadioInput
            id="yearly"
            name="subscribe"
            value="yearly"
            onChange={handleSubscribeSwitch}
          />
          <ToggleBackground />
          <ToggleSlider />
        </Toggle>
        <LabelWithDiscount htmlFor="yearly">Yearly Billing</LabelWithDiscount>
      </RadioGroup>
    </SwitcherContainer>
  );
};

export default Switcher;
