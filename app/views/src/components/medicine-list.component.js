import MedicineDataService from "../services/medicine.service";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MedicineList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveAllMedicines = this.retrieveAllMedicines.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveMedicine = this.setActiveMedicine.bind(this);
    this.deleteAllMedicines = this.deleteAllMedicines.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      medicines: [],
      currentMedicine: null,
      currentIndex: -1,
      searchName: "",
    };
  }

  componentDidMount() {}

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName,
    });
  }

  retrieveAllMedicines() {
    MedicineDataService.getAll()
      .then((response) => {
        this.setState({
          medicines: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveAllMedicines();
    this.setState({
      currentMedicine: null,
      currentIndex: -1,
    });
  }

  setActiveMedicine(medicine, index) {
    this.setState({
      currentMedicine: medicine,
      currentIndex: index,
    });
  }

  deleteAllMedicines() {
    MedicineDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchName() {
    MedicineDataService.findByName(this.state.searchName)
      .then((response) => {
        this.setState({
          medicines: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { searchName, medicines, currentMedicine, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Medicines List</h4>

          <ul className="list-group">
            {medicines &&
              medicines.map((medicine, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveMedicine(medicine, index)}
                  key={index}
                >
                  {medicine.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.deleteAllMedicines}
          >
            Delete All Medicines
          </button>
        </div>
        <div className="col-md-6">
          {currentMedicine ? (
            <div>
              <h4>Medicine</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentMedicine.name}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentMedicine.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentMedicine.low_stock ? "Low Stock" : "High Stock"}
              </div>

              <Link
                to={"/medicines/" + currentMedicine.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Medicine...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
