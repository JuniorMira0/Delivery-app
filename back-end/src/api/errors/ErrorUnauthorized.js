class ErrorUnauthorized extends Error {
  constructor(message) {
    super(message);
    this.code = 401;
  }
}

module.exports = ErrorUnauthorized;
