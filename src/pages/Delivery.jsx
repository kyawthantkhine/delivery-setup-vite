
import { useNavigate } from "react-router-dom";
import DeliveryCard from "../components/DeliveryCard";
import TopLabel from "../components/TopLabel";
import { deliveries } from "../constants";
import { FaPlus } from "react-icons/fa";
const Delivery = () => {
    const navigate = useNavigate()
  return (
    <div className="relative min-h-[100vh]">
      <TopLabel title={"ကုန်ပစ္စည်း ပို့ဆောင်မှု"} />
        <div className="flex flex-col gap-6" >
            {deliveries.map(dle =>{
                return <DeliveryCard key={dle.label} {...dle}/>
            })}
        </div>
      
      <button onClick={()=>{navigate('/delivery/create-delivery')}} className="absolute bottom-10 right-10 rounded-2xl flex justify-center bg-yellow-400 text-white p-5 items-center">
            <FaPlus/>
      </button>

    </div>
  );
};

export default Delivery;
