import { useState } from "react";
import TopNavigator from "../components/TopNavigator";
import SearchBar from "../components/SearchBar";
import { settings } from "../constants";
import SettingLabel from "../components/SettingLabel";

const Main = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="">
      <TopNavigator title="ဆက်တင်များ" />
      <SearchBar search={search} onSearchChange={setSearch} />
      {settings.map((setting, i) => {
        if(Array.isArray(setting)){
          return setting.map(st=>  <SettingLabel key={st.name + i} setting={st} />)
        }
        return <SettingLabel key={setting.name + i} setting={setting} />;
      })}
    </div>
  );
};

export default Main;
