/**
 * Copyright © 2023 Nevis Security AG. All rights reserved.
 */

import { RecoverableError } from '../../RecoverableError';

/**
 * The object that informs that an error occurred during PIN enrollment.
 *
 * Currently, this is always a {@link PinEnrollmentInvalidPinFormat}.
 */
export class PinEnrollmentError extends RecoverableError {}
//# sourceMappingURL=PinEnrollmentError.js.map