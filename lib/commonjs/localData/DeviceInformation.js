"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeviceInformationImpl = exports.DeviceInformation = void 0;
var _IdUserNamePair = require("./IdUserNamePair");
/**
 * Copyright © 2023 Nevis Security AG. All rights reserved.
 */

/**
 * The object containing information of the device where the SDK is running.
 *
 * For nevisFIDO to be able to generate encrypted out-of-band payloads that can only be decrypted by
 * your application, a `DeviceInformation` must be provided during registration. During registration,
 * you must provide the {@link name} and optionally the {@link fcmRegistrationToken}. The other
 * information exposed by the `DeviceInformation` ({@link deviceId} and {@link idUsernamePairs}) are
 * generated by the SDK and are not required during registration.
 *
 * For nevisFIDO to be able to dispatch tokens using the Firebase Cloud Messaging infrastructure, the
 * device information {@link fcmRegistrationToken} must be filled with the token (as defined by
 * {@link https://firebase.google.com/docs/cloud-messaging/js/client | Firebase}). This registration
 * token is associated with the mobile device receiving the push notifications.
 *
 * There is a single `DeviceInformation` for all accounts. It is created when the first successful
 * registration is completed, and it is deleted when the last authenticator (and thus the last account)
 * is removed (using the {@link Deregistration} or {@link LocalData.deleteAuthenticator | LocalData.deleteAuthenticator}).
 * When a `DeviceInformation` is provided in a registration operation, and a `DeviceInformation` is
 * already defined (that is, there is already a registered authenticator), the provided `DeviceInformation`
 * will be ignored. The device information contents (name and FCM registration token) can be changed
 * using a {@link DeviceInformationChange}.
 *
 * The `DeviceInformation` data is stored in nevisIDM as generic credentials. For each account registered,
 * a generic credential will be created in nevisIDM containing the device information. These generic
 * credentials are named dispatch targets in the nevisFIDO terminology.
 *
 * The following example creates a `DeviceInformation` using a phone description (that can be provided
 * by the end user, since this is used for the end user to identify the mobile device) and a Firebase
 * registration token:
 *
 * @example
 * ```ts
 *  createDeviceInformation(
 *      phoneDescription: string,
 *      firebaseRegistrationToken: string
 *  ): DeviceInformation {
 *      return DeviceInformation.create(
 *          phoneDescription,
 *          firebaseRegistrationToken
 *      );
 *  }
 * ```
 *
 * See:
 * - {@link Registration.deviceInformation}
 * - {@link OutOfBandRegistration.deviceInformation}
 * - {@link AuthCloudApiRegistration.deviceInformation}
 * - {@link DeviceInformationChange}
 * - {@link LocalData.deviceInformation}
 */
class DeviceInformation {
  /**
   * A user-friendly name to identify this device.
   * The name can be modified using {@link DeviceInformationChange}.
   *
   * Note that the name of the {@link DeviceInformation} must be unique for a given user (i.e.
   * a user cannot have two {@link DeviceInformation}s with the same name in the server). Trying
   * to use an existing name for a {@link DeviceInformation} during registration results in an
   * {@link OperationError} error. If an existing name is provided when invoking {@link DeviceInformationChange.execute},
   * then a {@link DeviceInformationChangeError} with a {@link DeviceInformationChangeNameAlreadyExists}
   * is returned.
   *
   * The name is stored in nevisIDM in the `fidouaf_name` attribute of the
   * generic credentials containing the dispatch target information.
   */

  /**
   * The identifier that is generated for the device during registration.
   *
   * It is a `string` that is used in the backend to associate FIDO UAF credentials with a device.
   *
   * This property gives back an empty `string` by default, because its value is not required when
   * {@link DeviceInformation} is provided during registration. The {@link DeviceInformation} returned
   * {@link LocalData.deviceInformation} contains a valid device identifier.
   *
   * The device ID is stored in nevisIDM in the `fidouaf_device_id` attribute of the generic
   * credentials containing the dispatch target information.
   */

  /**
   * The {@link https://firebase.google.com/docs/cloud-messaging/js/client | Firebase Cloud Messaging}
   * registration token.
   * Since the Firebase registration token can change, this can be modified using {@link DeviceInformationChange}.
   *
   * If push notification is disabled, (for instance when all the out-of-band is done using QR codes
   * or deep links) no Firebase Cloud Messaging registration token value is required.
   *
   * The Firebase Cloud Messaging registration token is stored in nevisIDM in the `fidouaf_target`
   * attribute of the generic credentials containing the dispatch target information.
   */

  /**
   * The identifiers of the generic credentials containing the dispatch target information in nevisIDM
   * and the associated username.
   */

  /**
   * Default constructor for {@link DeviceInformation}.
   *
   * @param name the user-friendly name describing the device.
   * @param fcmRegistrationToken the Firebase Cloud Messaging registration token.
   * @returns an {@link Account} instance.
   */
  static create(name, fcmRegistrationToken) {
    return new DeviceInformationImpl(name, [], undefined, fcmRegistrationToken);
  }

  /**
   * Alternate constructor that creates a {@link DeviceInformation} from a json.
   *
   * @param json contains the source for instance creation.
   * @returns a {@link DeviceInformation} instance.
   */
  static fromJson(json) {
    return DeviceInformationImpl.fromJson(json);
  }
}
exports.DeviceInformation = DeviceInformation;
class DeviceInformationImpl extends DeviceInformation {
  deviceId = '';
  constructor(name, idUsernamePairs, deviceId, fcmRegistrationToken) {
    super();
    this.name = name;
    if (deviceId) {
      this.deviceId = deviceId;
    }
    this.fcmRegistrationToken = fcmRegistrationToken;
    this.idUsernamePairs = idUsernamePairs;
  }
  static fromJson(json) {
    const idUsernamePairs = json.idUsernamePairs.map(idUsernamePair => _IdUserNamePair.IdUserNamePair.fromJson(idUsernamePair));
    return new DeviceInformationImpl(json.name, idUsernamePairs, json.deviceId, json.fcmRegistrationToken);
  }
}
exports.DeviceInformationImpl = DeviceInformationImpl;
//# sourceMappingURL=DeviceInformation.js.map