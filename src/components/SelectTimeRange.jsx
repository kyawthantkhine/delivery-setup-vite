import { TimePicker } from "@mui/x-date-pickers/TimePicker";
const SelectTimeRange = ({ title, timeRange, setTimeRange }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold">{title}</p>
      <div className="flex gap-1 w-full justify-between items-center">
        <TimePicker
         sx={{borderRadius: 20}}
          value={timeRange.openTime}
          onChange={(newValue) =>
            setTimeRange({ ...timeRange, openTime: newValue })
          }
        />
        <span>မှ</span>
        <TimePicker
          value={timeRange.closeTime}
          onChange={(newValue) =>
            setTimeRange({ ...timeRange, closeTime: newValue })
          }
        />
      </div>
    </div>
  );
};

export default SelectTimeRange;
