import styled from "styled-components";
import iconSlider from "../assets/icon-slider.svg";

const RangeInput = styled.input.attrs({ type: "range" })`
  appearance: none;
  width: 90%;
  grid-area: rangeInput;

  /* the circle slider for chrome */
  &::-webkit-slider-thumb {
    appearance: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.sliderBackround};
    background-image: url(${iconSlider});
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0px 15px 25px 10px ${(props) => props.theme.sliderShadow};
    margin-top: -13px;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    height: 10px;
    background-color: ${(props) => props.theme.emptySliderBar};
    border-radius: 9999px;
  }

  &:focus {
    outline: none;
  }

  /* FOR FIREFOX */
  &::-moz-range-thumb {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.sliderBackround};
    background-image: url(${iconSlider});
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0px 15px 25px 10px ${(props) => props.theme.sliderShadow};
    /* margin-top: -13px; */
    border: none;
    cursor: pointer;
  }

  &::-moz-range-progress {
    height: 10px;
    background-color: ${(props) => props.theme.fullSliderBar};
    border-radius: 9999px;
  }

  &::-moz-range-track {
    height: 10px;
    background-color: ${(props) => props.theme.emptySliderBar};
    border-radius: 9999px;
  }
`;

export default RangeInput;
