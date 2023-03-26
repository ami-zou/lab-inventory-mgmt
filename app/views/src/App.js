import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AddMedicine from "./components/add-medicine.component";
import Medicine from "./components/medicine.component";
import MedicinesList from "./components/medicine-list.component";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />

        <div className="main">
          <Navbar />

          <main className="content">
            <div className="container-fluid p-0">
              <Dashboard />
            </div>
          </main>

          <Footer />
        </div>

        <Routes>
          <Route path="/" element={<medicinesList />} />
          <Route path="/medicines" element={<MedicinesList />} />
          <Route path="/add" element={<AddMedicine />} />
          <Route path="/medicines/:id" element={<Medicine />} />
        </Routes>
      </div>
    );
  }
}

export default App;
