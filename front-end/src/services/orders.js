const getOrders = async () => {
  const mock = [
    {
      id: 1,
      status: 'pendente',
      saleDate: '01/11/22',
      totalPrice: 28.46,
      deliveryAddress: 'laland',
      deliveryNumber: 5,
    },
    {
      id: 2,
      status: 'entregue',
      saleDate: '22/07/22',
      totalPrice: 60.5,
      deliveryAddress: 'whole cake',
      deliveryNumber: 66,
    },
    {
      id: 3,
      status: 'preparando',
      saleDate: '02/12/22',
      totalPrice: 68.45,
      deliveryAddress: 'punk hazard',
      deliveryNumber: 52,
    },
  ];

  return mock;
};

export default getOrders;
