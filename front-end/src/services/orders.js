const getOrders = async () => {
  const mock = [
    {
      id: 1,
      status: 'pendente',
      data: '12/10/22',
      preco: 25.90,
      endereco: 'Rua Teste do teste',
    },
    {
      id: 2,
      status: 'compĺeto',
      data: '13/10/22',
      preco: 26.10,
      endereco: 'Rua Testera',
    },
    {
      id: 3,
      status: 'preparando',
      data: '33/10/22',
      preco: 85.90,
      endereco: 'Rua braco',
    },
    {
      id: 4,
      status: 'pendente',
      data: '12/10/22',
      preco: 50,
      endereco: 'Rua bela',
    },
  ];

  return mock;
};

export default getOrders;
