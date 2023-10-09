import { useState } from "react";
import TopNavigator from "../components/TopNavigator";
import SearchBar from "../components/SearchBar";
import { settings } from "../constants";

const Main = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <TopNavigator title="ဆက်တင်များ" />
      <SearchBar search={search} onSearchChange={setSearch} />
      {settings.map((setting) => {
        return (
          <div
            className="flex justify-between px-3 w-full py-1"
            key={setting.name}
          >
            <div className="flex gap-2">
              {setting.icon}
              {setting.name}
            </div>
            <div className=" text-gray-700 text-lg font-bold">
              {`>`}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
