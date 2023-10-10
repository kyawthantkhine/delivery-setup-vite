import { FaSearch } from "react-icons/fa";
const SearchBar = ({ search, onSearchChange }) => {
  return (
    <div className="relative">
      <input
        className="bg-gray-100 rounded-full px-3 py-2 w-full outline-none"
        type="text"
        placeholder="ဆက်တင်များ ရှာရန်"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <span className="absolute top-[12px] right-[20px]">
        <FaSearch className="text-gray-500" />
      </span>
    </div>
  );
};

export default SearchBar;
