import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { FaArrowLeftLong } from "react-icons/fa6";

const CountryDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundCountry = data.find((c) => c.name === countryName);
        setCountry(foundCountry);
        setLoading(false);
      });
  }, [countryName]);

  if (loading) {
    return <Loading />;
  }

  if (!country) {
    return <div>Country not found</div>;
  }
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="mb-20">
        <Link to={"/"}>
          <button className="flex items-center justify-center gap-2 rounded-md px-10 py-3 shadow-md outline-none focus:outline-none dark:bg-Dark-Blue-Dark-Mode-Elements dark:text-white">
            <FaArrowLeftLong />
            Back
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 items-center gap-32">
        <div>
          <img
            src={country.flag}
            alt={`${country.name} flag`}
            className="w-full"
          />
        </div>
        <div>
          <h1 className="mb-10 text-4xl font-bold dark:text-white">
            {country.name}
          </h1>
          <div className="flex justify-between">
            <div>
              <p className="dark:text-white">
                <span className="font-semibold">Native Name: </span>
                {country.nativeName}
              </p>
              <p className="dark:text-white">
                <span className="font-semibold">Population: </span>
                {country.population}
              </p>
              <p className="dark:text-white">
                <span className="font-semibold">Region: </span>
                {country.region}
              </p>
              <p className="dark:text-white">
                <span className="font-semibold">Sub Region: </span>
                {country.subregion}
              </p>
              <p className="dark:text-white">
                <span className="font-semibold">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div>
              <p className="dark:text-Dark-Gray-Light-Mode-Input">
                <span className="font-semibold dark:text-white">
                  Top Level Domain:{" "}
                </span>
                {country.topLevelDomain}
              </p>
              <p className="dark:text-white">
                <span className="font-semibold">Currencies: </span>
                {country.currencies.map((currency, index) => (
                  <span key={index}>{currency.name}</span>
                ))}
              </p>
              <p className="dark:text-white">
                <span className="font-semibold">Languages: </span>
                {country.languages.map((index, lang) => (
                  <span key={index}>{lang.name}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
