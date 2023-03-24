const db = require("../models");
const Medicine = db.medicines;
const Op = db.Sequelize.Op;

// Create and Save a new Medicine
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Medicine name is required!"
        });
    return;
    }

    // Create a Medicine
    const medicine = {
        name: req.body.name,
        description: req.body.description,
        brand: req.body.brand,
        quantity: req.body.quantity,
        consumption_unit: req.body.consumption_unit,
        inventory_type: req.body.inventory_type,
        inventory_location: req.body.inventory_location,
        price: req.body.price,
        low_stock: req.body.low_stock ? req.body.low_stock : false
    };

    // Save Medicine in the database
    Medicine.create(medicine)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Medicine."
            });
        });
};

// Retrieve all Medicines from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${title}%` } } : null;

    Medicine.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving medicines."
            });
        });
};

// Find a single Medicine with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Medicine.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                message: `Cannot find Medicine with id=${id}.`
            });
            }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Medicine with id=" + id
        });
    });
  
};

// Update a Medicine by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    
    Medicine.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Medicine was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Medicine with id=${id}. Maybe Medicine was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Medicine with id=" + id
            });
        });
};

// Delete a Medicine with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Medicine.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Medicine was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Medicine with id=${id}. Maybe Medicine was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Medicine with id=" + id
        });
      });
  };

// Delete all Medicines from the database.
exports.deleteAll = (req, res) => {
    Medicine.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Medicines were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };

// Find all low stock Medicines
exports.findAllLowStock = (req, res) => {
    Medicine.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving medicines."
            });
        });

};