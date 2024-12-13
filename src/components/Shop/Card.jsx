import {Button,
    Typography,
    } from "@material-tailwind/react";


import { useEffect, useState } from "react";


export default function PricingCard({ title, desc ,price, options, numberOfCards, symbol, buyFn }) {
  const [cardHeight, setCardHeight] = useState()
  const [cardHeaderheight, setCardHeaderHeight] = useState()


  useEffect(()=>{
    const card = document.getElementById("pricingcard")
    const cardheader = document.getElementById("pricingcardheader")
    setCardHeight(card.offsetHeight)
    setCardHeaderHeight(cardheader.offsetHeight)

  },[cardHeaderheight, cardHeight])
    return (
      <div id="pricingcard" className={`flex flex-col w-[${100/numberOfCards}%] md:w-2/3 bg-clip-border rounded-xl text-gray-700 shadow-md bg-cover bg-[url(/home/sirkartik/vscode/esports_website_react/frontend/src/assets/images/layered-waves-haikei.svg)]`}>
        <div className={`backdrop-blur-sm w-full rounded-xl h-full`}>
          {/*---------------------------------------- Header Div --------------------------------------------- */}
          <div className="p-6 w-full" id="pricingcardheader"> 
            <Typography
              variant="h6"
              color="white"
              className="capitalize font-bold mb-1"
            >
              {title}
            </Typography>
            <Typography
              variant="small"
              className="font-normal white"
            >
              {desc}
            </Typography>
            <Typography
              variant="h3"
              color="white"
              className="!mt-4 flex gap-1 !text-4xl"
            >
              {symbol}
              {price}
              <Typography
                as="span"
                color="white"
                className="-translate-y-0.5 self-end opacity-70 text-lg font-bold"
              >
                {price[2]? `/ ${price[2]}` : null}
              </Typography>
            </Typography>
            </div>
            {/* -----------------------Header Div ends---------------------------- */}

            {/* ---------------------------------Body Div----------------------------------- */}
            <div className={`w-full flex flex-col pt-0 p-6 gap-5 h-[15rem] justify-between`}>
                <div>
                  <ul className="flex flex-col gap-3">
                    {options.map((option, key) => (
                      <li
                        key={key}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        {option.icon}
                        <Typography
                          variant="small"
                          className="font-normal text-inherit"
                        >
                          {option.info}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
                
              <div className="">
                <Button fullWidth className="bg-gradient-to-br from-purple-500 to-purple" onClick={buyFn}>
                  Buy Now
                </Button>
              </div>

            </div>
            {/* --------------------------Body Div ends----------------------- */}

        </div>
      </div>
    );
  }