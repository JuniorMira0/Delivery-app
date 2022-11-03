module.exports = (sequelize, DataTypes) => {
  const SalesProductsTable = sequelize.define(
    "SalesProductsModel",
    {
      saleId: {
        field: "sale_id",
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
      },
      productId: {
        field: "product_id",
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
      tableName: "sales_products",
    }
  );

  SalesProductsTable.associate = (models) => {
    models.SalesModel.belongsToMany(models.ProductsModel, {
      as: "productId",
      through: SalesProductsTable,
      foreignKey: "saleId",
      otherKey: "productId",
    });
    models.ProductsModel.belongsToMany(models.SalesModel, {
      as: "saleId",
      through: SalesProductsTable,
      foreignKey: "productId",
      otherKey: "saleId",
    });
  };

  return SalesProductsTable;
};
