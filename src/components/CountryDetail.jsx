import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { FaArrowLeftLong } from "react-icons/fa6";

const CountryDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [countryMap, setCountryMap] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundCountry = data.find((c) => c.name === countryName);
        setCountry(foundCountry);
        setLoading(false);

        // Create a mapping of border abbreviations to country names
        const countryMapping = {};
        data.forEach((c) => {
          countryMapping[c.alpha3Code] = c.name;
        });
        setCountryMap(countryMapping);
      });
  }, [countryName]);

  const handleBorderClick = (borderCountryCode) => {
    const borderCountryName = countryMap[borderCountryCode];
    if (borderCountryName) {
      navigate(`/country/${borderCountryName}`);
    }
  };

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
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-36">
        <div>
          <img
            src={country.flag}
            alt={`${country.name} flag`}
            className="w-full"
          />
        </div>
        <div>
          <h1 className="my-10 text-4xl font-bold dark:text-white">
            {country.name}
          </h1>
          <div className="flex flex-col gap-10 xl:flex-row 2xl:gap-36 xl:gap-20">
            <div className="flex flex-col gap-2">
              <p className="flex gap-2 dark:text-white">
                <span className="font-semibold">Native Name: </span>
                <div className="font-light">{country.nativeName}</div>
              </p>
              <p className="flex gap-2 dark:text-white">
                <span className="font-semibold">Population: </span>
                <div className="font-light">
                  {country.population.toLocaleString()}
                </div>
              </p>
              <p className="flex gap-2 dark:text-white">
                <span className="font-semibold">Region: </span>
                <div className="font-light">{country.region}</div>
              </p>
              <p className="flex gap-2 dark:text-white">
                <span className="font-semibold">Sub Region: </span>
                <div className="font-light">{country.subregion}</div>
              </p>
              <p className="flex gap-2 dark:text-white">
                <span className="font-semibold">Capital: </span>
                <div className="font-light">
                  {country.capital ? country.capital : "unkown"}
                </div>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex gap-2 dark:text-white">
                <span className="font-semibold">Top Level Domain: </span>
                <div className="font-light">{country.topLevelDomain}</div>
              </p>
              <p className="flex gap-2 dark:text-white">
                <span className="font-semibold">Currencies: </span>
                <div className="font-light">
                  {country.currencies?.map((currency, index) => (
                    <span key={index}>{currency.name}</span>
                  ))}
                </div>
              </p>
              <p className="flex gap-2 dark:text-white">
                <span className="font-semibold">Languages: </span>
                <div className="font-light">
                  {country.languages?.map((lang, index) => (
                    <span key={index}>{lang.name}, </span>
                  ))}
                </div>
              </p>
            </div>
          </div>

          <div className="mt-20 flex flex-wrap items-center gap-5 dark:text-white">
            <div className="font-semibold"> Border Countries: </div>

            {country.borders ? (
              country.borders?.map((b, index) => (
                <button
                  key={index}
                  onClick={() => handleBorderClick(b)}
                  className="flex w-48 items-center justify-center gap-2 rounded-md px-10 py-3 shadow-md outline-none focus:outline-none dark:bg-Dark-Blue-Dark-Mode-Elements dark:text-white"
                >
                  {countryMap[b]}
                </button>
              ))
            ) : (
              <div className="flex w-48 items-center justify-center gap-2 rounded-md px-10 py-3 shadow-md outline-none focus:outline-none dark:bg-Dark-Blue-Dark-Mode-Elements dark:text-white">
                Unknown
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
