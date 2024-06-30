import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Loading from "./Loading";
import Search from "./Search";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";

const Countries = ({}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const filteredData = data.filter((country) => {
    return (
      (searchTerm === "" ||
        country.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedRegion === "" || country.region === selectedRegion)
    );
  });

  const handleCardClick = (countryName) => {
    navigate(`/country/${countryName}`);
  };

  return (
    <div className="container mx-auto px-5">
      <div className="o my-6 mb-10 flex flex-col justify-between gap-8 md:my-10 md:flex-row md:gap-0">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filter
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>
      <div
        className={` ${loading ? "justify-start" : "justify-center"} flex items-center`}
      >
        <div className="grid grid-cols-1 justify-center gap-20 px-10 sm:grid-cols-2 sm:px-0 lg:grid-cols-3 2xl:grid-cols-4">
          {loading ? (
            <Loading />
          ) : (
            filteredData.map((country) => (
              <CountryCard
                key={country.name}
                capital={country.capital}
                countryName={country.name}
                flag={country.flag}
                population={country.population}
                region={country.region}
                onClick={() => handleCardClick(country.name)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Countries;
