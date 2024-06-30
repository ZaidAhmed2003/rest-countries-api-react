import { MdOutlineExpandMore } from "react-icons/md";

const Filter = ({ selectedRegion, setSelectedRegion }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="relative inline-block w-64">
      <select
        id="country"
        name="country"
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
        className="dark:bg-Dark-Blue-Dark-Mode-Elements dark:text- w-full appearance-none rounded-md border-0 bg-white px-6 py-4 text-gray-900 shadow-lg focus:outline-none dark:text-white"
      >
        <option value="">Filter by Region</option>
        {regions.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-2xl dark:text-white">
        <MdOutlineExpandMore />
      </div>
    </div>
  );
};

export default Filter;
