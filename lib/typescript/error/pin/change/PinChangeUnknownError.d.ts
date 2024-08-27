/**
 * Copyright © 2023 Nevis Security AG. All rights reserved.
 */
import { PinChangeError } from './PinChangeError';
/**
 * Unknown PIN change error, handling not categorized error cases.
 */
export declare class PinChangeUnknownError extends PinChangeError {
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
//# sourceMappingURL=PinChangeUnknownError.d.ts.map