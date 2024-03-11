import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import Services from './Pages/Services'
import Team from './Pages/Team'
import PetShop from './Pages/PetShop'
import AllCategories from './Pages/AllCategories'
import ProductDetails from './Pages/ProductDetails'
import ViewAppointment from './Admin/ViewAppointmentPage'
import AddAppointment from './Admin/AddAppointmentPage'
import Appointment from './Pages/Appointment'
import ViewUsers from './Admin/ViewUserPage';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/petshop" element={<PetShop />} />
          <Route path="/petshop/:id" element={<ProductDetails />} />
          <Route path="/all-categories" element={<AllCategories />} />
          <Route path="/view-appointment" element={<ViewAppointment />} />
          <Route path="/add-appointment" element={<AddAppointment />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/view-users" element={<ViewUsers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
