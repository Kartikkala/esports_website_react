/* eslint-disable react/prop-types */
import PricingCard from "./Card";
export function PriceCardsWideDisplay({
  cards
}) {
  return <div className="flex flex-col gap-6 justify-between md:overflow-x-auto md:flex-row">
          {cards.map(({
      title,
      desc,
      options,
      price
    }, key) => <PricingCard key={key} title={title} desc={desc} price={price} options={options} />)}
        </div>;
}
  