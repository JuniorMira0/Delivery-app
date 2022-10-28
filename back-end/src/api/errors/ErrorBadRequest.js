class ErrorBadRequest extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.code = 400;
  }
}

module.exports = ErrorBadRequest;
