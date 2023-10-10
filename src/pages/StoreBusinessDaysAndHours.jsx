import { dayState, days } from "../constants/days";
import { useState } from "react";
import spinner from "/ATB3o.gif";
import BigHeading from "../components/BigHeading";
import { twMerge } from "tailwind-merge";
import BackButton from "../components/BackButton";
import CustomCheckbox from "../components/CustomCheckbox";

import SelectTimeRange from "../components/SelectTimeRange";
import { Button } from "@mui/material";

const StoreBusinessDaysAndHours = () => {
  const [isloading, setIsLoading] = useState(false);
  const [settingsHasChanged, setSettingsHasChanged] = useState(false);

  // handle days change
  const [checkAllDays, setCheckAllDays] = useState(false);
  const [dayCheckboxes, setDayCheckboxes] = useState(dayState);
  const handleDayCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setDayCheckboxes({
      ...dayCheckboxes,
      [name]: checked,
    });
    setSettingsHasChanged(true);
  };
  const handleCheckAllDays = () => {
    const newCheckboxes = {};
    const isChecked = !checkAllDays;

    // Loop through the keys in dayCheckboxes and set them all to isChecked
    for (const day of Object.keys(dayCheckboxes)) {
      newCheckboxes[day] = isChecked;
    }

    setCheckAllDays(isChecked);
    setDayCheckboxes(newCheckboxes);
  };

  //handle time change
  const [timeRange, setTimeRange] = useState({ openTime: "", closeTime: "" });
  console.log(timeRange);

  let saveButton;

  if (!isloading && settingsHasChanged) {
    saveButton = (
      // <button
      //   className="text-blue-500 font-semibold"
      //   onClick={() => setIsLoading(true)}
      // >
      //   သိမ်းဆည်းမည်
      // </button>

      <Button
        variant="contained"
        sx={{ width: "100%", py: "15px" }}
        onClick={() => setIsLoading(true)}
      >
        သိမ်းဆည်းမည်
      </Button>
    );
  } else if (isloading && settingsHasChanged) {
    saveButton = (
      <Button
        variant="outlined"
        sx={{ width: "100%", py: "15px" }}
        onClick={() => setIsLoading(true)}
      >
        Loading
      </Button>
    );
  }

  return (
    <div className="flex justify-center flex-col h-[100vh]">
      <div className={"bg-white sticky top-0 z-40 "}>
        {/* Top navigator  */}
        <div className="md:container flex items- justify-between py-3">
          {/* this icon will be replaced after getting the design file */}
          <BackButton />
        </div>
      </div>
      <BigHeading title={"ဆိုင်ဖွင့်သောရက်နှင့်အချိန်"} />

      {/* list of days checkboxes */}
      <div className="flex flex-col gap-4 mb-5">
        <div className="flex justify-between ">
          <p className="font-semibold">ဆိုင်ဖွင့်သောရက်</p>
          <label className="mr-4 text-gray-800">
            အားလုံးရွေးရန်{" "}
            <input
              type="checkbox"
              name="checkAll"
              checked={checkAllDays}
              onChange={handleCheckAllDays}
              className=""
            />
          </label>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {Object.keys(dayCheckboxes).map((day) => (
            <label
              key={day}
              className={twMerge(
                "flex justify-between rounded-xl p-3 border border-gray-200 ",
                dayCheckboxes[day] && "bg-blue-500 text-white border-white"
              )}
            >
              {day}
              {/* <input
          className="accent-white"
          type="checkbox"
          name={day}
          checked={dayCheckboxes[day]}
          onChange={handleDayCheckboxChange}
        /> */}
              <CustomCheckbox
                name={day}
                checked={dayCheckboxes[day]}
                onChange={handleDayCheckboxChange}
              />
            </label>
          ))}
        </div>
      </div>

      {/* section for picking time */}
      <SelectTimeRange
        title={"ဆိုင်ဖွင့်ချိန်"}
        timeRange={timeRange}
        setTimeRange={setTimeRange}
      />
      <div className="w-full mt-auto mb-5">{saveButton}</div>
    </div>
  );
};

export default StoreBusinessDaysAndHours;
