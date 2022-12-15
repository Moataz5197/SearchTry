import React from 'react';
import CountryCard from "../CountryCard/CountryCard";
function CountryList({countryList}) {
  return (
  <div>
      <ul className="users-list">
        {countryList.map((item, index) => {
          return (
            <CountryCard
              key={index}
              id={index}
              image={item.flags.png}
              placeCount={item.capital}
              name={item.name.common}
            />
          );
        })}
      </ul> 

  </div>
  );
}

export default CountryList;
