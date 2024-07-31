const ClientCodes = Object.freeze({
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
});

const ServerCodes = Object.freeze({
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  NOT_IMPLEMENTED: 501,
});

const SuccessCodes = Object.freeze({
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  MULTI_STATUS: 207,
  ALREADY_REPORTED: 208,
  IM_USED: 226,
  SEE_OTHER: 303,
  FOUND: 302,
  SEE_OTHER: 303,
});

module.exports = {
  ClientCodes,
  ServerCodes,
  SuccessCodes,
};
