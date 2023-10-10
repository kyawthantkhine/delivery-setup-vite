import { Box, Switch } from "@mui/material";
import { useState } from "react";
import BigHeading from "../components/BigHeading";
import BackButton from "../components/BackButton";
import CustomNumberInput from "../components/CustomNumberInput";

const DeliveryFees = () => {
  const [isloading, setIsLoading] = useState(false);
  const [settingsHasChanged, setSettingsHasChanged] = useState(false);
  //save button apppearance
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

  // the seller will deliver free if the order amount exceeds this value
  const [minOrderAmount, setMinOrderAmount] = useState(null);
  const [willDeliverFree, setWillDeliverFree] = useState(false);

  //the seller will set fees for weight limit
  const [regularWeightLimit, setRegularWeithLimit] = useState(null);
  const [willHaveOverWeightFees, setWillHaveOverWeightFees] = useState(false);
  //for eveery excess kg, the fee will apply
  const [excessWeight, setExcessWeight] = useState(null);
  const [excessFees, setExcessFees] = useState(null);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* Top navigator  */}
      <div className="md:container flex items- justify-between py-3">
        {/* this icon will be replaced after getting the design file */}
        <BackButton />
        {saveButton}
      </div>

      <BigHeading title={"ပို့ဆောင်ခသတ်မှတ်ချက်များ"} />

      <div className=" flex flex-col gap-5 mb-10">
        <div className="flex justify-between">
          <p className="font-semibold text-lg w-3/4 ">
            သတ်မှတ်ထားသော အော်ဒါပမာဏထက် ပိုမှာယူပါက အခမဲ့ပို့ဆောင်မည်
          </p>
          <Switch
            checked={willDeliverFree}
            onChange={() => setWillDeliverFree(!willDeliverFree)}
          />
        </div>
        {willDeliverFree && (
          <>
            <CustomNumberInput
              label={"အနည်းဆုံးမှာယူရမည့် အော်ဒါပမာဏ"}
              unit={"ကျပ်"}
              amount={minOrderAmount}
              setAmount={setMinOrderAmount}
              placeholder="5000"
            />
          </>
        )}
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <p className="font-semibold text-lg w-3/4 ">
            အလေးချိန်ပိုအော်ဒါများအတွက် ပို့ဆောင်ခထပ်တိုးကောက်ခံမည်
          </p>
          <Switch
            checked={willHaveOverWeightFees}
            onChange={() => setWillHaveOverWeightFees(!willHaveOverWeightFees)}
          />
        </div>
        {willHaveOverWeightFees && (
          <div className="flex flex-col gap-5">
            <CustomNumberInput
              label={
                "ပုံမှန်ပို့ဆောင်ခနူန်းထားဖြင့်ပို့ဆောင်နိုင်သော အများဆုံးအလေးချိန်ကိုသတ်မှတ်ပါ"
              }
              unit={"kg"}
              amount={regularWeightLimit}
              setAmount={setRegularWeithLimit}
              placeholder="၅"
            />
            <div className="flex items-center justify-center gap-1">
              <CustomNumberInput
                label={"ထပ်တိုးအလေးချိန်"}
                unit={"kg"}
                amount={excessWeight}
                setAmount={setExcessWeight}
                placeholder="1"
              />
              <p>တိုင်းအတွက်</p>
              <CustomNumberInput
                label={"ထပ်တိုးကောက်ခံငွေ"}
                unit={"kg"}
                amount={excessFees}
                setAmount={setExcessFees}
                placeholder="3000"
              />
            </div>
          </div>
        )}
      </div>
    </Box>
  );
};

export default DeliveryFees;
