import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="main">
        <Navbar />

        <main className="content">
          <div className="container-fluid p-0">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Layout;
