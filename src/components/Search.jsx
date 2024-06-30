import { IoMdSearch } from "react-icons/io";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <label className="relative block">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <IoMdSearch className="text-Dark-Blue-Dark-Mode-Elements text-xl dark:text-white" />
      </span>
      <input
        className="dark:bg-Dark-Blue-Dark-Mode-Elements border-Very-Light-Gray-Light-Mode-Background placeholder:text-Dark-Gray-Light-Mode-Input w-full rounded-lg border bg-white px-12 py-4 shadow-lg focus:outline-none md:w-96 dark:border-0 dark:text-white dark:placeholder:text-white"
        placeholder="Search for anything..."
        type="text"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </label>
  );
};

export default Search;
