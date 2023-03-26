import http from "../http-common";

class MedicineDataService {
  getAll() {
    return http.get("/medicines");
  }

  get(id) {
    return http.get(`/medicines/${id}`);
  }

  create(data) {
    return http.post("/medicines", data);
  }

  update(id, data) {
    return http.put(`/medicines/${id}`, data);
  }

  delete(id) {
    return http.delete(`/medicines/${id}`);
  }

  deleteAll() {
    return http.delete(`/medicines`);
  }

  findByName(name) {
    return http.get(`/medicines?name=${name}`);
  }
}

export default new MedicineDataService();
