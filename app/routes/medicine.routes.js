module.exports = app => {
    const medicines = require("../controllers/medicine.controller.js");
  
    var router = require("express").Router();
  
    // Create a new medicine
    router.post("/", medicines.create);
  
    // Retrieve all Medicines
    router.get("/", medicines.findAll);
  
    // Retrieve all published Medicines
    router.get("/low-stock", medicines.findAllLowStock);
  
    // Retrieve a single Medicine with id
    router.get("/:id", medicines.findOne);
  
    // Update a Medicine with id
    router.put("/:id", medicines.update);
  
    // Delete a Medicine with id
    router.delete("/:id", medicines.delete);
  
    // Create a new Medicine
    router.delete("/", medicines.deleteAll);
  
    app.use('/medicines', router);
  };