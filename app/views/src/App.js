import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //TODO: update this with other boostrap

import "./App.css";

import AddMedicine from "./components/add-medicine.component";
import Medicine from "./components/medicine.component";
import MedicinesList from "./components/medicine-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/medicines" className="navbar-brand">
            azou
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/medicines"} className="nav-link">
                Medicines
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<medicinesList />} />
            <Route path="/medicines" element={<MedicinesList />} />
            <Route path="/add" element={<AddMedicine />} />
            <Route path="/medicines/:id" element={<Medicine />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
