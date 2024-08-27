/**
 * Copyright © 2023 Nevis Security AG. All rights reserved.
 */

import { OperationError } from './OperationError';

/**
 * An error that occurs with username-less out-of-band authentication, if the username of a registered
 * account is provided to the {@link AccountSelectionHandler}, but the user is not defined in the server
 * where the token was redeemed.
 */
export class OperationUserNotRegisteredInServerError extends OperationError {
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
//# sourceMappingURL=OperationUserNotRegisteredInServerError.js.map