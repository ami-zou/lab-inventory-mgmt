function AddMedForm() {
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

export default AddMedForm;
