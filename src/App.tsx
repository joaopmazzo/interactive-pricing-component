import patternCircles from "./assets/pattern-circles.svg";

import PriceCard from "./components/PriceCard";

function App() {
  return (
    <div>
      <div className="bg-[#F1F5FE] rounded-bl-[191px] h-1/2 w-full z-[-1] absolute top-0 left-0" />
      <header
        role="header"
        className="flex flex-col items-center justify-center gap-2 sm:gap-3 mt-24"
      >
        <h1 className="font-extrabold text-xl sm:text-3xl text-[#293356]">
          Simple, traffic-based pricing
        </h1>
        <p className="font-semibold sm:font-extrabold text-xs sm:text-sm text-[#848EAD] text-center w-44 sm:w-full">
          Sing-up for our 30-day trial. No credit card required
        </p>

        <img src={patternCircles} alt="circles" className="absolute z-[-1]" />
      </header>

      <main role="main" className="sm:flex sm:items-center sm:justify-center">
        <PriceCard />
      </main>
    </div>
  );
}

export default App;
