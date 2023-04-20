import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Appointments from "./views/appointments/Appointments";
import Clients from "./views/clients/Clients";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Patients from "./views/patients/Patients";
import PointOfSale from "./views/pos/PointOfSale";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={
          <Layout title="View name here">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/sales" element={<PointOfSale />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/clients" element={<Clients />} />
            </Routes>
          </Layout>} />
        <Route path="/log-in" element={<Login />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
