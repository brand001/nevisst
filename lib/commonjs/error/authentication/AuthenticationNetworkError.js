"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticationNetworkError = void 0;
var _AuthenticationError = require("./AuthenticationError");
/**
 * Copyright © 2023 Nevis Security AG. All rights reserved.
 */

/**
 * A network error occurred while redeeming the token: either the server was not reachable or it returned
 * an HTTP error.
 */
class AuthenticationNetworkError extends _AuthenticationError.AuthenticationError {
  /**
   * Provides details about the error that occurred.
   */

  /**
   * The exception (if any) that caused this error.
   */

  /**
   * The {@link SessionProvider} that can be used to continue with the operation.
   */

  /**
   * The default constructor.
   *
   * @param description provides details about the error that occurred.
   * @param cause the exception (if any) that caused this error.
   * @param sessionProvider the {@link SessionProvider} that can be used to continue with the operation.
   */
  constructor(description, cause, sessionProvider) {
    super();
    this.description = description;
    this.cause = cause;
    this.sessionProvider = sessionProvider;
  }
}
exports.AuthenticationNetworkError = AuthenticationNetworkError;
//# sourceMappingURL=AuthenticationNetworkError.js.map