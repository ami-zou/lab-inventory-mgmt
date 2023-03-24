module.exports = (sequelize, Sequelize) => {
    const Medicine = sequelize.define("medicne", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.DECIMAL
      },
      consumption_unit: {
        type: Sequelize.STRING
      },
      inventory_type: {
        type: Sequelize.STRING
      },
      inventory_location: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      low_stock: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Medicine;
  };