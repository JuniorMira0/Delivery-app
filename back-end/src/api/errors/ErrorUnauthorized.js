class ErrorUnauthorized extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.code = 401;
  }
}

module.exports = ErrorUnauthorized;
