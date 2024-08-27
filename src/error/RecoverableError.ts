/**
 * Copyright © 2023 Nevis Security AG. All rights reserved.
 */

import { MobileAuthenticationClientError } from './MobileAuthenticationClientError';

/**
 * The interface implemented by all recoverable errors.
 */
export abstract class RecoverableError extends MobileAuthenticationClientError {}
