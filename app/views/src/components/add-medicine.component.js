import React, { Component } from "react";
import MedicineDataService from "../services/medicine.service";

export default class AddMedicine extends Component {
  /** Sample JSON body
   * 
    "name": "Ibuprofen",
    "description": "Help relieve mild to moderate pain.",
    "brand": "Medi First",
    "quantity": 50,
    "consumption_unit": "bottle",
    "inventory_type": "consummable",
    "inventory_location": "counter",
    "price": 20,
    "low_stock": false
 */
  constructor(props) {
    super(props);

    // bind this to all the events
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeConsumptionUnit = this.onChangeConsumptionUnit.bind(this);
    this.onChangeInventoryType = this.onChangeInventoryType.bind(this);
    this.onChangeInventoryLocation = this.onChangeInventoryLocation.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeLowStock = this.onChangeLowStock.bind(this);
    this.saveMedicine = this.saveMedicine.bind(this);
    this.newMedicine = this.newMedicine.bind(this);

    // set default empty state
    this.state = {
      id: null,
      name: "test drug",
      description: "test drug",
      brand: "test brand",
      quantity: 0,
      consumption_unit: "bottle",
      inventory_type: "consumable",
      inventory_location: "counter",
      price: 0,
      low_stock: false,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeBrand(e) {
    this.setState({
      brand: e.target.value,
    });
  }

  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value,
    });
  }

  onChangeConsumptionUnit(e) {
    this.setState({
      consumption_unit: e.target.value,
    });
  }

  onChangeInventoryType(e) {
    this.setState({
      inventory_type: e.target.value,
    });
  }

  onChangeInventoryLocation(e) {
    this.setState({
      inventory_location: e.target.value,
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  onChangeLowStock(e) {
    this.setState({
      low_stock: e.target.value,
    });
  }

  saveMedicine() {
    var data = {
      name: this.state.name,
      description: this.state.description,
      brand: this.state.brand,
      quantity: this.state.quantity,
      consumption_unit: this.state.consumption_unit,
      inventory_type: this.state.inventory_type,
      inventory_location: this.state.inventory_location,
      price: this.state.price,
      low_stock: this.state.low_stock,
    };

    MedicineDataService.create(data).then((response) => {
      this.setState({
        id: response.data.id,

        name: response.data.name,
        description: response.data.description,
        brand: response.data.brand,
        quantity: response.data.quantity,
        consumption_unit: response.data.consumption_unit,
        inventory_type: response.data.inventory_type,
        inventory_location: response.data.inventory_location,
        price: response.data.price,
        low_stock: response.data.low_stock,

        submitted: true,
      }).catch((e) => {
        console.log(e);
      });
    });
  }

  newMedicine() {
    this.setState({
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

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Successfully added a new medicine!</h4>
            <button className="btn btn-success" onClick={this.newMedicine}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="brand">brand</label>
              <input
                type="text"
                className="form-control"
                id="brand"
                required
                value={this.state.brand}
                onChange={this.onChangeBrand}
                name="brand"
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantity">quantity</label>
              <input
                type="text"
                className="form-control"
                id="quantity"
                required
                value={this.state.quantity}
                onChange={this.onChangeQuantity}
                name="quantity"
              />
            </div>

            <div className="form-group">
              <label htmlFor="consumption_unit">Consumption Unit</label>
              <input
                type="text"
                className="form-control"
                id="consumption_unit"
                required
                value={this.state.consumption_unit}
                onChange={this.onChangeConsumptionUnit}
                name="consumption_unit"
              />
            </div>

            <div className="form-group">
              <label htmlFor="inventory_type">Inventory Type</label>
              <input
                type="text"
                className="form-control"
                id="inventory_type"
                required
                value={this.state.inventory_type}
                onChange={this.onChangeInventoryType}
                name="inventory_type"
              />
            </div>

            <div className="form-group">
              <label htmlFor="inventory_location">inventory_location</label>
              <input
                type="text"
                className="form-control"
                id="inventory_location"
                required
                value={this.state.inventory_location}
                onChange={this.onChangeInventoryLocation}
                name="inventory_location"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                required
                value={this.state.price}
                onChange={this.onChangePrice}
                name="price"
              />
            </div>

            <div className="form-group">
              <label htmlFor="low_stock">Low Stock</label>
              <input
                type="text"
                className="form-control"
                id="low_stock"
                required
                value={this.state.low_stock}
                onChange={this.onChangeLowStock}
                name="low_stock"
              />
            </div>

            <button onClick={this.saveMedicine} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
