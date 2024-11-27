import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Card = ({heading, desc, buttonText, buttonUrl}) => {
  return (
    // Modify height, width for desktop
    <div className="h-[16em] w-[18em] min-w-[16em] border-2 border-gray-800 rounded-[1.5em] bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-lg shadow-lg text-white font-nunito p-[1em] flex justify-around items-left flex-col gap-[0.75em] grow">
      <div>
        <h1 className="text-[2em] font-medium">{heading}</h1>
        <p className="text-[0.85em]">
          {desc}
        </p>
      </div>
      <NavLink to={buttonUrl} className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
        <p>{buttonText}</p>
        <svg className="w-6 h-6 group-hover:translate-x-[10%] duration-300" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </NavLink>
    </div>
  );
}

export default Card;
