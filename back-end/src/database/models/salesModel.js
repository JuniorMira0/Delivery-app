module.exports = (sequelize, DataTypes) => {
  const salesTable = sequelize.define(
    "SalesModel",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      userId: {
        field: "user_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      sellerId: {
        field: "seller_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      totalPrice: {
        field: "total_price",
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      deliveryAddress: {
        field: "delivery_address",
        type: DataTypes.STRING,
        allowNull: false,
      },
      deliveryNumber: {
        field: "delivery_number",
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      saleDate: {
        field: "sale_date",
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "sales",
    }
  );

   salesTable.associate = (models) => {
     salesTable.belongsTo(models.UserModel, {
       foreignKey: "userId",
       as: "user",
     });
     salesTable.belongsTo(models.UserModel, {
       foreignKey: "sellerId",
       as: "seller",
     });
   };

 return salesTable;
};
