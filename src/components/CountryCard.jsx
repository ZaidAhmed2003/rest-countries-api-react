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

  return (
    <>
      <div
        onClick={onClick}
        className="ursor-pointer w-[350px] cursor-pointer rounded-md bg-white shadow-lg transition-shadow duration-200 hover:shadow-2xl dark:bg-Dark-Blue-Dark-Mode-Elements md:w-[300px]"
      >
        <img className="h-48 w-full rounded-t-md" src={flag} />

        <div className="px-6 py-5">
          <h2 className="mb-4 text-xl font-bold dark:text-white">
            {countryName}
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-sm dark:text-white">
              <span className="font-semibold">Population:</span>{" "}
              {population.toLocaleString()}
            </p>
            <p className="text-sm dark:text-white">
              <span className="font-semibold">Region:</span> {region}
            </p>
            <p className="mb-6 text-sm dark:text-white">
              <span className="font-semibold">Capital:</span> {capital}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
