import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import DeliveryDateAndTime from "./pages/DeliveryDateAndTime";
import { Container } from "@mui/material";
import StoreBusinessDaysAndHours from "./pages/StoreBusinessDaysAndHours";
import DeliveryFees from "./pages/DeliveryFees";
import Delivery from "./pages/Delivery";
import CreateDelivery from "./pages/CreateDelivery";
function App() {
  return <Container maxWidth="sm" sx={{minHeight:"100vh" }}>


  <Routes>
    <Route path="/deliveryDateAndTime" element={<DeliveryDateAndTime/>}></Route>
    <Route path="/storeBusinessDaysAndHours" element={<StoreBusinessDaysAndHours/>}></Route>
    <Route path="/deliveryFees" element={<DeliveryFees/>}></Route>
    <Route path="/delivery/create-delivery" element={<CreateDelivery/>}/>
    <Route path="/delivery" element={<Delivery/>}></Route>
    <Route path="/" element={<Main/>}></Route>
  </Routes>
  </Container>
   
}

export default App;
