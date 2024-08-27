/**
 * Copyright © 2023 Nevis Security AG. All rights reserved.
 */

import { DeleteAuthenticatorError } from './DeleteAuthenticatorError';

/**
 * Unknown error, handling not categorized error cases.
 */
export class DeleteAuthenticatorUnknownError extends DeleteAuthenticatorError {
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
//# sourceMappingURL=DeleteAuthenticatorUnknownError.js.map