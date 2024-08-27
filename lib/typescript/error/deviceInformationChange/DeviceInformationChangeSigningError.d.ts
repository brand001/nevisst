/**
 * Copyright © 2023 Nevis Security AG. All rights reserved.
 */
import { DeviceInformationChangeError } from './DeviceInformationChangeError';
/**
 * An error occurred signing the update device information request.
 */
export declare class DeviceInformationChangeSigningError extends DeviceInformationChangeError {
    /**
     * Provides details about the error that occurred.
     */
    description: string;
    /**
     * The exception (if any) that caused this error.
     */
    cause?: string;
    /**
     * The default constructor.
     *
     * @param description provides details about the error that occurred.
     * @param cause the exception (if any) that caused this error.
     */
    constructor(description: string, cause?: string);
}
//# sourceMappingURL=DeviceInformationChangeSigningError.d.ts.map