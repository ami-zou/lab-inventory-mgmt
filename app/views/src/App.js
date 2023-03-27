import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

import AddMedicine from "./components/add-medicine.component";
import Medicine from "./components/medicine.component";
import MedicinesList from "./components/medicine-list.component";
import Dashboard from "./pages/Dashboard";
import Page1 from "./pages/Page-1";
import Page2 from "./pages/Page-2";
import Page3 from "./pages/Page-3";
import NotFound from "./pages/Notfound";
import Layout from "./components/Layout";

class App extends Component {
  render() {
    return (
      //TODO consider wrap this in BrowserRouter for userHistory()

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/medicines" element={<MedicinesList />} />
          <Route path="/add" element={<AddMedicine />} />
          <Route path="/medicines/:id" element={<Medicine />} />
          <Route path="/page-1" element={<Page1 />} />
          <Route path="/page-2" element={<Page2 />} />
          <Route path="/page-3" element={<Page3 />} />
          <Route path="/" element={<NotFound />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
