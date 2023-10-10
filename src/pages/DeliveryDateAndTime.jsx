import { dayState, days } from "../constants/days";
import { useState } from "react";
import spinner from "/ATB3o.gif";
import BigHeading from "../components/BigHeading";
import { twMerge } from "tailwind-merge";
import BackButton from "../components/BackButton";

// import SelectTimeRange from "../components/SelectTimeRange";

const DeliveryDateAndTime = () => {
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
    setSettingsHasChanged(true)
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

  let saveButton;

  if (!isloading && settingsHasChanged) {
    saveButton = (
      <button
        className="text-blue-500 font-semibold"
        onClick={() => setIsLoading(true)}
      >
        သိမ်းဆည်းမည်
      </button>
    );
  } else if (isloading && settingsHasChanged) {
    saveButton = <p className="bg-red-500">Loading</p>;
  }

  return (
    <div>
      <div className={"bg-white sticky top-0 z-40 "}>

        {/* Top navigator  */}
        <div className="md:container flex items- justify-between py-3">
          {/* this icon will be replaced after getting the design file */}
          <BackButton/>
          {saveButton}
        </div>

        <BigHeading title={"ပို့ဆောင်သောရက်နှင့်အချိန်"} />

        {/* list of days checkboxes */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between ">
            <p className="font-semibold">ပို့ဆောင်သောရက်</p>
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
                <input
                  className="accent-white"
                  type="checkbox"
                  name={day}
                  checked={dayCheckboxes[day]}
                  onChange={handleDayCheckboxChange}
                />
              </label>
            ))}
          </div>
        </div>

        {/* section for picking time */}
        {/* <SelectTimeRange/> */}
      </div>
    </div>
  );
};

export default DeliveryDateAndTime;
