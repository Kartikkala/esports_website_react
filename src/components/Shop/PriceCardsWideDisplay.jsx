/* eslint-disable react/prop-types */
import PricingCard from "./Card";

export function PriceCardsWideDisplay({ cards }) {
  return (
    <div className="flex flex-col gap-6 justify-between md:overflow-x-auto md:flex-row">
      {cards.map((card, key) => (
        <PricingCard 
          key={key} 
          title={card.title} 
          desc={card.desc} 
          price={card.price} 
          options={card.options} 
          numberOfCards={cards.length}
          buyFn={card.buyFn}
        />
      ))}
    </div>
  );
}