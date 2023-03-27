import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

import AddMedicine from "./components/add-medicine.component";
import Medicine from "./components/medicine.component";
import MedicinesList from "./components/medicine-list.component";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/Notfound";
import Layout from "./components/Layout";

class App extends Component {
  render() {
    return (
      //TODO consider wrap this in BrowserRouter for userHistory()

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/medicines" element={<MedicinesList />} />
          <Route path="/add" element={<AddMedicine />} />
          <Route path="/medicines/:id" element={<Medicine />} />
          <Route path="/" element={<NotFound />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
