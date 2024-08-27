/**
 * Copyright © 2023 Nevis Security AG. All rights reserved.
 */

import { UserVerificationContext } from './UserVerificationContext';
import { Authenticator } from '../../localData/Authenticator';

/**
 * The object providing information about the device passcode user verification (i.e. the user
 * credential validation) operation to be done.
 *
 * @see {@link DevicePasscodeUserVerifier.verifyDevicePasscode}
 */
export class DevicePasscodeUserVerificationContext extends UserVerificationContext {
  /**
   * Alternate constructor that creates a {@link DevicePasscodeUserVerificationContext} from a json.
   *
   * @param json contains the source for instance creation.
   * @returns a {@link DevicePasscodeUserVerificationContext} instance.
   */
  static fromJson(json) {
    return DevicePasscodeUserVerificationContextImpl.fromJson(json);
  }
}
export class DevicePasscodeUserVerificationContextImpl extends DevicePasscodeUserVerificationContext {
  constructor(authenticator) {
    super();
    this.authenticator = authenticator;
  }
  static fromJson(json) {
    const authenticator = Authenticator.fromJson(json.authenticator);
    return new DevicePasscodeUserVerificationContextImpl(authenticator);
  }
}
//# sourceMappingURL=DevicePasscodeUserVerificationContext.js.map