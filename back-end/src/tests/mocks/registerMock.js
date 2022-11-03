const registerMock = {
  user: {
    id: 23,
    name: "LeBron James",
    email: "lj23@lakers.com",
    password: "b1a2s3k4e5t6"
  },
  createdUser: {
    dataValues: {
      id: 24,
      name: "Kobe Bryant",
      email: "kb24@lakers.com",
      password: "b1a2s3k4e5t6"
    }
  },
  successfulRegister: {
    name: "Kobe Bryant",
    email: "kb24@lakers.com",
    password: "basket"
  },
  unsuccessfulRegister: {
    name: "LeBron James",
    email: "lj23@lakers.com",
    password: "basket"
  },
  successfulResponse: {
    name: 'Kobe Bryant',
    email: 'kb24@lakers.com',
    token: 'tokenCorreto'
  }
}

module.exports = registerMock;