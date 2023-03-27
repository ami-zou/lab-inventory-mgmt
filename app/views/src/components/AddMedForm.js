function AddMedForm(props) {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          required
          value={props.state.name}
          onChange={props.onChangeName}
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
          value={props.state.description}
          onChange={props.onChangeDescription}
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
          value={props.state.brand}
          onChange={props.onChangeBrand}
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
          value={props.state.quantity}
          onChange={props.onChangeQuantity}
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
          value={props.state.consumption_unit}
          onChange={props.onChangeConsumptionUnit}
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
          value={props.state.inventory_type}
          onChange={props.onChangeInventoryType}
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
          value={props.state.inventory_location}
          onChange={props.onChangeInventoryLocation}
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
          value={props.state.price}
          onChange={props.onChangePrice}
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
          value={props.state.low_stock}
          onChange={props.onChangeLowStock}
          name="low_stock"
        />
      </div>

      <button onClick={props.saveMedicine} className="btn btn-success">
        Submit
      </button>
    </div>
  );
}

export default AddMedForm;
