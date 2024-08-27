"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FidoErrorCode = void 0;
/**
 * Copyright © 2023 Nevis Security AG. All rights reserved.
 */

/**
 * Error class indicating that a problem during a FIDO UAF operation occurred.
 */
class FidoErrorCode {
  /**
   * The underlying FIDO UAF error type.
   */

  /**
   * The description of the error.
   */

  /**
   * Default constructor for {@link FidoErrorCode}.
   *
   * @param type the underlying FIDO UAF error type.
   * @param description the description of the error.
   */
  constructor(type, description) {
    this.type = type;
    this.description = description;
  }
}
exports.FidoErrorCode = FidoErrorCode;
//# sourceMappingURL=FidoErrorCode.js.map