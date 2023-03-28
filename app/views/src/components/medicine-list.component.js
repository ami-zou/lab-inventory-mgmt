import MedicineDataService from "../services/medicine.service";
import { Component } from "react";
import MedList from "./MedList";

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

    this.refreshList();
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
    return MedList(this);
  }
}
