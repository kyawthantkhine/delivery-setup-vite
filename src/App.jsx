import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import DeliveryDateAndTime from "./pages/DeliveryDateAndTime";
import { Container } from "@mui/material";

function App() {
  return <Container maxWidth="sm">


  <Routes>
    <Route path="/deliveryDateAndTime" element={<DeliveryDateAndTime/>}></Route>
    <Route path="/" element={<Main/>}></Route>
  </Routes>
  </Container>
   
}

export default App;
