import React from "react";
import { useNavigate } from "react-router-dom";

const CountryCard = ({
  population,
  region,
  capital,
  flag,
  countryName,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/${countryName}`);
  };

  return (
    <div
      onClick={onClick}
      className="ursor-pointer min-w-[345px] cursor-pointer rounded-md bg-white shadow-lg transition-shadow duration-200 hover:shadow-2xl dark:bg-Dark-Blue-Dark-Mode-Elements sm:min-w-full"
    >
      <div className="w-full">
        <img className="w-full rounded-t-md object-cover" src={flag} />
      </div>
      <div className="px-6 py-4">
        <h2 className="mb-4 text-lg font-bold dark:text-white">
          {countryName}
        </h2>

        <p className="text-sm dark:text-white">Population: {population}</p>
        <p className="text-sm dark:text-white">Region: {region}</p>
        <p className="mb-6 text-sm dark:text-white">Capital: {capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
