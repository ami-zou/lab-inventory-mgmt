import React from 'react';
import Routes from "../routes";
import Sidebar from "./Sidebar";

function Layout(props) {
    return (
      <div className="wrapper">
        <Sidebar />
        <Routes />

        <div className="main">
          <Navbar />

          <main className="content">
            <div className="container-fluid p-0">
              {/* PLACEHOLDER FOR DASHBOARD */}
            </div>
          </main>

          <Footer />
        </div>
      </div>
    );
}
​
export default Layout;