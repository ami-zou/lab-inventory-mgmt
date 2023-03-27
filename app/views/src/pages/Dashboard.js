function Dashboard() {
  return (
    <>
      <h1 className="h3 mb-3">
        <strong>Analytics</strong> Dashboard
      </h1>

      <div className="row">
        <div className="col-xl-6 col-xxl-5 d-flex">
          <div className="w-100">
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col mt-0">
                        <h5 className="card-title">Consumption</h5>
                      </div>

                      <div className="col-auto">
                        <div className="stat text-primary">
                          <i className="align-middle" data-feather="truck"></i>
                        </div>
                      </div>
                    </div>
                    <h1 className="mt-1 mb-3">2382</h1>
                    <div className="mb-0">
                      <span className="text-danger">
                        {" "}
                        <i className="mdi mdi-arrow-bottom-right"></i> 4.73%{" "}
                      </span>
                      <span className="text-muted">Since last week</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col mt-0">
                        <h5 className="card-title">Patients</h5>
                      </div>

                      <div className="col-auto">
                        <div className="stat text-primary">
                          <i className="align-middle" data-feather="users"></i>
                        </div>
                      </div>
                    </div>
                    <h1 className="mt-1 mb-3">157</h1>
                    <div className="mb-0">
                      <span className="text-success">
                        {" "}
                        <i className="mdi mdi-arrow-bottom-right"></i> 5.25%{" "}
                      </span>
                      <span className="text-muted">Since last week</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col mt-0">
                        <h5 className="card-title">Earnings</h5>
                      </div>

                      <div className="col-auto">
                        <div className="stat text-primary">
                          <i
                            className="align-middle"
                            data-feather="dollar-sign"
                          ></i>
                        </div>
                      </div>
                    </div>
                    <h1 className="mt-1 mb-3">$35,300</h1>
                    <div className="mb-0">
                      <span className="text-success">
                        {" "}
                        <i className="mdi mdi-arrow-bottom-right"></i> 6.95%{" "}
                      </span>
                      <span className="text-muted">Since last week</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col mt-0">
                        <h5 className="card-title">Orders</h5>
                      </div>

                      <div className="col-auto">
                        <div className="stat text-primary">
                          <i
                            className="align-middle"
                            data-feather="shopping-cart"
                          ></i>
                        </div>
                      </div>
                    </div>
                    <h1 className="mt-1 mb-3">64</h1>
                    <div className="mb-0">
                      <span className="text-danger">
                        {" "}
                        <i className="mdi mdi-arrow-bottom-right"></i> -2.25%{" "}
                      </span>
                      <span className="text-muted">Since last week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-xxl-7">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Inventory Stock</h5>
            </div>
            <div className="card-body py-3">
              <div className="chart chart-sm">
                <canvas id="chartjs-dashboard-line"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-8 col-xxl-9 d-flex">
          <div className="card flex-fill">
            <div className="card-header">
              <h5 className="card-title mb-0">Latest Inventory</h5>
            </div>
            <table className="table table-hover my-0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th className="d-none d-xl-table-cell">Quantity</th>
                  <th className="d-none d-xl-table-cell">Consumption Type</th>
                  <th>Status</th>
                  <th className="d-none d-md-table-cell">Consumption Unit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Medicine 1</td>
                  <td className="d-none d-xl-table-cell">100</td>
                  <td className="d-none d-xl-table-cell">consumable</td>
                  <td>
                    <span className="badge bg-success">High</span>
                  </td>
                  <td className="d-none d-md-table-cell">ml</td>
                </tr>
                <tr>
                  <td>Medicine 2</td>
                  <td className="d-none d-xl-table-cell">10</td>
                  <td className="d-none d-xl-table-cell">consumable</td>
                  <td>
                    <span className="badge bg-danger">Low</span>
                  </td>
                  <td className="d-none d-md-table-cell">2 ml</td>
                </tr>
                <tr>
                  <td>Medicine 3</td>
                  <td className="d-none d-xl-table-cell">100</td>
                  <td className="d-none d-xl-table-cell">consumable</td>
                  <td>
                    <span className="badge bg-success">High</span>
                  </td>
                  <td className="d-none d-md-table-cell">ml</td>
                </tr>
                <tr>
                  <td>Medicine 4</td>
                  <td className="d-none d-xl-table-cell">30</td>
                  <td className="d-none d-xl-table-cell">consumable</td>
                  <td>
                    <span className="badge bg-success">Medium</span>
                  </td>
                  <td className="d-none d-md-table-cell">ml</td>
                </tr>
                <tr>
                  <td>Medicine 5</td>
                  <td className="d-none d-xl-table-cell">100</td>
                  <td className="d-none d-xl-table-cell">consumable</td>
                  <td>
                    <span className="badge bg-success">High</span>
                  </td>
                  <td className="d-none d-md-table-cell">ml</td>
                </tr>
                <tr>
                  <td>Medicine 6</td>
                  <td className="d-none d-xl-table-cell">100</td>
                  <td className="d-none d-xl-table-cell">consumable</td>
                  <td>
                    <span className="badge bg-success">High</span>
                  </td>
                  <td className="d-none d-md-table-cell">ml</td>
                </tr>
                <tr>
                  <td>Medicine 7</td>
                  <td className="d-none d-xl-table-cell">100</td>
                  <td className="d-none d-xl-table-cell">consumable</td>
                  <td>
                    <span className="badge bg-success">High</span>
                  </td>
                  <td className="d-none d-md-table-cell">ml</td>
                </tr>
                <tr>
                  <td>Medicine 8</td>
                  <td className="d-none d-xl-table-cell">100</td>
                  <td className="d-none d-xl-table-cell">consumable</td>
                  <td>
                    <span className="badge bg-success">High</span>
                  </td>
                  <td className="d-none d-md-table-cell">ml</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-xxl-3 d-flex">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Monthly Consumption</h5>
            </div>
            <div className="card-body d-flex w-100">
              <div className="align-self-center chart chart-lg">
                <canvas id="chartjs-dashboard-bar"></canvas>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
            <div className="card flex-fill w-100">
              <div className="card-header">
                <h5 className="card-title mb-0">Department Usage</h5>
              </div>
              <div className="card-body d-flex">
                <div className="align-self-center w-100">
                  <div className="py-3">
                    <div className="chart chart-xs">
                      <canvas id="chartjs-dashboard-pie"></canvas>
                    </div>
                  </div>

                  <table className="table mb-0">
                    <tbody>
                      <tr>
                        <td>Automatic</td>
                        <td className="text-end">50,000</td>
                      </tr>
                      <tr>
                        <td>Disposed due to expiry</td>
                        <td className="text-end">10,000</td>
                      </tr>
                      <tr>
                        <td>Audit Adjustments</td>
                        <td className="text-end">20,000</td>
                      </tr>
                      <tr>
                        <td>Manual</td>
                        <td className="text-end">10,000</td>
                      </tr>
                      <tr>
                        <td>Quality Control</td>
                        <td className="text-end">5,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-xxl-6 d-flex order-3 order-xxl-2">
            <div className="card flex-fill w-100">
              <div className="card-header">
                <h5 className="card-title mb-0">Inventory Location</h5>
              </div>
              <div className="card-body px-4">
                <div id="world_map" style={{ height: 350 }}></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-3 d-flex order-1 order-xxl-1">
            <div className="card flex-fill">
              <div className="card-header">
                <h5 className="card-title mb-0">Calendar</h5>
              </div>
              <div className="card-body d-flex">
                <div className="align-self-center w-100">
                  <div className="chart">
                    <div id="datetimepicker-dashboard"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
