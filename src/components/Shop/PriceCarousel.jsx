/* eslint-disable react/prop-types */
import PricingCard from "./Card";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export function PriceCarousel({
  currentIndex,
  cards,
  handlePrev,
  handleNext
}) {
  return <>

        <div className="relative w-full max-w-md overflow-hidden">
          {
        /* Cards Container */
      }
          <div className="flex transition-transform duration-500 ease-in-out" style={{
        transform: `translateX(-${currentIndex * 100}%)`,
        width: `${cards.length * 100}%`
      }}>
            {cards.map((card, index) => <div key={index} className="w-full flex-shrink-0 p-2">
                <PricingCard title={card.title} desc={card.desc} price={card.price} options={card.options} />
              </div>)}
          </div>
        </div>

        {
      /* Navigation Buttons */
    }
        <div className="flex justify-between w-full max-w-md mt-4">
          <button onClick={handlePrev} className="p-2 bg-gray-800/50 rounded-full">
            <ArrowLeftIcon className="h-6 w-6 text-white" />
          </button>
          <button onClick={handleNext} className="p-2 bg-gray-800/50 rounded-full">
            <ArrowRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>
        </>;
}
  