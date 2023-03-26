import React, { Component } from "react";
import { withRouter } from "../common/with-router";
import MedicineDataService from "../services/medicine.service";

class Medicine extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getMedicine = this.getMedicine.bind(this);
    this.updateMedicine = this.updateMedicine.bind(this);
    this.deleteMedicine = this.deleteMedicine.bind(this);

    this.state = {
      currentMedicine: {
        id: null,
        name: "",
        description: "",
        brand: "",
        quantity: 0,
        consumption_unit: "",
        inventory_type: "",
        inventory_location: "",
        price: 0,
        low_stock: false,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getMedicine(this.props.router.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState((prevState) => ({
      currentMedicine: {
        ...prevState.currentMedicine,
        name: name,
      },
    }));
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentMedicine: {
        ...prevState.currentMedicine,
        description: description,
      },
    }));
  }

  getMedicine(id) {
    MedicineDataService.get(id)
      .then((response) => {
        this.setState({
          currentMedicine: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateMedicine() {
    MedicineDataService.update(
      this.state.currentMedicine.id,
      this.state.currentMedicine
    )
      .then((response) => {
        console.log(response.data);
        this.setState({
          message: "The medicine was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteMedicine() {
    MedicineDataService.delete(this.state.currentMedicine.id)
      .then((response) => {
        console.log(response.data);
        this.props.router.navigate("/medicines");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentMedicine } = this.state;

    return (
      <div>
        {currentMedicine ? (
          <div className="edit-form">
            <h4>Medicine</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentMedicine.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentMedicine.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Inventory status:</strong>
                </label>
                {currentMedicine.low_stock ? "Low stock" : "High stock"}
              </div>
            </form>

            {/* {currentMedicine.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Low stock
              </button>
            )} */}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteMedicine}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateMedicine}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Medicine...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Medicine);
