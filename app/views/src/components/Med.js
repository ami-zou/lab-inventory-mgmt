function Med(props) {
  const { currentMedicine } = props.state;

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
                onChange={props.onChangeName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={currentMedicine.description}
                onChange={props.onChangeDescription}
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
                onClick={() => props.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => props.updatePublished(true)}
              >
                Low stock
              </button>
            )} */}

          <button
            className="btn btn-sm btn-danger mt-1"
            onClick={props.deleteMedicine}
          >
            Delete
          </button>

          <button
            type="submit"
            className="btn btn-primary btn-sm"
            onClick={props.updateMedicine}
          >
            Update
          </button>
          <p>{props.state.message}</p>
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

export default Med;
