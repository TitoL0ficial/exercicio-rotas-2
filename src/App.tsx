import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeBody from "./routes/HomeClient/HomeBody";
import Promotion from "./routes/HomeClient/Promotion";
import Subscription from "./routes/Subscription";
import HomeClient from "./routes/HomeClient";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeClient/>}>
          <Route index element={<HomeBody/>} />
          <Route path="promotion" element={<Promotion/>} />
        </Route>      
        <Route path="subscription" element={<Subscription/>} />
      </Routes>
    </BrowserRouter>
  )
}