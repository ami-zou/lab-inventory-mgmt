import { Link } from "react-router-dom";

function MedList(props) {
  const { searchName, medicines, currentMedicine, currentIndex } = props.state;

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Medicines List</h4>

        <ul className="list-group">
          {medicines &&
            medicines.map((medicine, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => props.setActiveMedicine(medicine, index)}
                key={index}
              >
                {medicine.name}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={props.deleteAllMedicines}
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
                <strong>Id:</strong>
              </label>{" "}
              {currentMedicine.id}
            </div>
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
              className="btn btn-primary btn-sm"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Medicine for details</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MedList;
