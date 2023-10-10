import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

const SelectTimeRange = ({title}) => {
  return (
    <div className='flex flex-col gap-4'>
        <p>{title}</p>
        <div className="flex gap-1">
            <TimePicker/>
            <span>မှ</span>
            <TimePicker/>
        </div>
    </div>
  )
}

export default SelectTimeRange