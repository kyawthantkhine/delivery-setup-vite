import React from 'react'
import { timeSlots } from '../../constants/dummyData'
const AutoGeneratedTimeOptions = () => {
  return (
    <div className="flex flex-col gap-2 my-5">
        <p className='text-sm text-gray-500'>သင့်ဆိုင်၏ ပို့ဆောင်မှု/ရပ်နားချိန်ပေါ်မူတည်၍ တွက်ချက်ထားပါသည်။ </p>
        <div className="overflow-scroll no-scrollbar flex gap-3">
            {timeSlots.map((timeSlot) => {
                return <p key={timeSlot} className="bg-gray-400  min-w-fit text-white rounded-full py-2 px-2">
                    {timeSlot} AM
                </p>
            } )}
        </div>
    </div>
  )
}

export default AutoGeneratedTimeOptions