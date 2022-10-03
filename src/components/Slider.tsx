import { Dispatch, SetStateAction } from "react";

import * as Slider from "@radix-ui/react-slider";

import IconSlider from "../assets/icon-slider.svg";

interface SliderComponentProps {
  sliderValue: number[];
  setSliderValue: Dispatch<SetStateAction<number[]>>;
}

const SliderComponent = ({
  sliderValue,
  setSliderValue,
}: SliderComponentProps) => (
  <Slider.Root
    role="slider"
    aria-label="slider"
    aria-labelledby="slider_label"
    aria-valuemax={100}
    aria-valuemin={0}
    aria-valuenow={sliderValue[0]}
    value={sliderValue}
    onValueChange={(data) => setSliderValue(data)}
    dir="ltr"
    min={0}
    max={100}
    step={20}
    name="views-price-slider"
    className="relative flex items-center w-full sm:w-[27.75rem] pt-10 pb-10 sm:pb-0 order-2 sm:order-3"
  >
    <Slider.Track className="bg-[#ECF0FB] relative flex-grow h-2 rounded-full overflow-hidden">
      <Slider.Range className="absolute bg-[#A4F3EB] h-full" />
    </Slider.Track>
    <Slider.Thumb
      aria-label="slider icon"
      className="w-10 h-10 rounded-full
      flex items-center justify-center
      bg-[#10D8C4] shadow-xl shadow-[#00FFE7]
      hover:cursor-pointer hover:bg-[#7AEADF]"
    >
      <img src={IconSlider} alt="Slider icon" />
    </Slider.Thumb>
  </Slider.Root>
);

export default SliderComponent;
