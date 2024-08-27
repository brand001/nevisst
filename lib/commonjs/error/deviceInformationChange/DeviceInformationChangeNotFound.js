"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeviceInformationChangeNotFound = void 0;
var _DeviceInformationChangeError = require("./DeviceInformationChangeError");
/**
 * Copyright © 2023 Nevis Security AG. All rights reserved.
 */

/**
 * The device information to be updated could not be found.
 */
class DeviceInformationChangeNotFound extends _DeviceInformationChangeError.DeviceInformationChangeError {
  /**
   * Provides details about the error that occurred.
   */

  /**
   * The exception (if any) that caused this error.
   */

  /**
   * The default constructor.
   *
   * @param description provides details about the error that occurred.
   * @param cause the exception (if any) that caused this error.
   */
  constructor(description, cause) {
    super();
    this.description = description;
    this.cause = cause;
  }
}
exports.DeviceInformationChangeNotFound = DeviceInformationChangeNotFound;
//# sourceMappingURL=DeviceInformationChangeNotFound.js.map