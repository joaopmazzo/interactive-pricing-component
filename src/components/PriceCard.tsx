import { useState, useEffect } from "react";

import useWindowDimensions from "../hooks/useWindowDimensions";

import CreateBenefits from "./CreateBenefits";
import LabelComponent from "./Label";
import SliderComponent from "./Slider";
import SwitchComponent from "./Switch";

export default function PriceCard() {
  const { width } = useWindowDimensions();

  const [sliderValue, setSliderValue] = useState<number[]>([60]);
  const [monthlyBilling, setMonthlyBilling] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(16);
  const [views, setViews] = useState<string>("100K");

  useEffect(() => {
    const sliderValueFormated = sliderValue[0] / 20;
    let price = 0;
    let views = "0";

    switch (sliderValueFormated) {
      case 1:
        price = 8;
        views = "10K";
        break;
      case 2:
        price = 12;
        views = "50K";
        break;
      case 3:
        price = 16;
        views = "100k";
        break;
      case 4:
        price = 24;
        views = "500k";
        break;
      case 5:
        price = 36;
        views = "1M";
        break;
    }

    price = monthlyBilling ? price * 0.75 : price;

    setPrice(price);
    setViews(views);
  }, [sliderValue, monthlyBilling]);

  return (
    <main
      className="my-24 mx-6 max-w-[540px] min-w-[327px] py-6 sm:py-10 px-8 sm:px-10 
      flex flex-col items-center justify-center rounded-lg
      shadow-2xl bg-[#FFFFFF]"
    >
      <div className="w-full flex flex-wrap items-center justify-center sm:justify-between">
        <p className="font-extrabold text-xs sm:text-sm text-light-text order-1">
          {views} page views
        </p>
        <div className="flex items-center gap-2 order-3 sm:order-2 ">
          <h1 className="font-extrabold text-4xl text-dark-text">
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h1>
          <span className="font-semibold text-base text-light-text">
            / month
          </span>
        </div>

        <SliderComponent
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
        />
      </div>

      <div className="relative flex items-center justify-center mt-10 gap-3 sm:gap-4">
        <LabelComponent text="Monthly Billing" />
        <SwitchComponent
          monthlyBilling={monthlyBilling}
          setMonthlyBilling={setMonthlyBilling}
        />
        <LabelComponent text="Yearly Billing" />
        <div className="absolute right-0 translate-x-[calc(100%+9px)] bg-[#FEEDE8] rounded-full py-[2px] px-[6px]">
          <p className="font-extrabold text-[10px] text-[#FF8D68]">
            {width < 640 ? "-25%" : "25% discount"}
          </p>
        </div>
      </div>

      <hr className="border border-[#ECF0FB] w-[calc(100%+3rem+3rem)] mt-10" />

      <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-6 sm:mt-8">
        <div className="flex flex-col gap-3">
          <CreateBenefits text="Unlimited websites" />
          <CreateBenefits text="100% data ownership" />
          <CreateBenefits text="Email reports" />
        </div>
        <button
          type="button"
          className="mt-8 sm:mt-0 py-3 px-12 bg-dark-text rounded-full font-extrabold text-[#BECDFF] text-xs hover:text-white"
        >
          Start my trial
        </button>
      </div>
    </main>
  );
}
