import React from "react";

const Cards = ({ country }) => {
  
  return (
    
    <article className="bg-white rounded-md overflow-hidden shadow-md shadow-gray-200 dark:bg-slate-800 duration-200 dark:shadow-gray-950">
     <div className="h-[200px]">
       <img  className="h-full w-full object-cover" src={country?.flags.svg} alt="" />
      </div>
      <section className="p-6">
       <h2 className="font-bold text-xl mb-3 dark:text-white"> {country?.name.common} </h2>
        <ul className="grid gap-1 text-base">
          <li className="font-semibold dark:text-white">Population: <span className="font-normal dark:text-white">{country?.population}</span></li>
         <li className="font-semibold dark:text-white">Region: <span className="font-normal dark:text-white">{country?.region}</span></li>
         <li className="font-semibold dark:text-white">Capital: <span className="font-normal dark:text-white">{country?.capital?.[0]}</span></li>
       </ul>
     </section>
   </article>

  
  )
};

export default Cards;
