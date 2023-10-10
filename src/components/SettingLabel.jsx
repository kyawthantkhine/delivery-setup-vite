import { Link } from "react-router-dom";

const SettingLabel = ({ setting }) => {
  return (
    <Link to={setting.path}>
      <div className="flex justify-between px-3 w-full py-1" key={setting.name}>
        <div className="flex gap-2">
          {/* {setting.icon} */}
          {setting.name}
        </div>
        <div className=" text-gray-700 text-lg font-bold">{`>`}</div>
      </div>
    </Link>
  );
};

export default SettingLabel;
