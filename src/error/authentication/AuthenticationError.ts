/**
 * Copyright © 2023 Nevis Security AG. All rights reserved.
 */

import { SessionProvider } from '../../authorization/SessionProvider';
import { MobileAuthenticationClientError } from '../MobileAuthenticationClientError';

/**
 * An extension of {@link MobileAuthenticationClientError} for the {@link Authentication} operation.
 *
 * The SDK returns a {@link SessionProvider} that can be used to continue the authentication.
 * This can be useful when the SDK is used with Identity Suite and cookies as backend:
 * even if the FIDO UAF authentication fails, we may want to continue using the
 * same authentication session to ask the end-user to authenticate in another way.
 */
export abstract class AuthenticationError extends MobileAuthenticationClientError {
	/**
	 * The {@link SessionProvider} that can be used to continue with the operation.
	 */
	abstract sessionProvider?: SessionProvider;
}
