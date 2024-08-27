/**
 * Copyright © 2023 Nevis Security AG. All rights reserved.
 */
import { PromptOptions } from './PromptOptions';
/**
 * Defines the elements of the biometric prompt (title, description and cancel button text).
 *
 * @see {@link BiometricUserVerificationHandler.listenForOsCredentials}
 */
export declare abstract class BiometricPromptOptions extends PromptOptions {
    /**
     * The cancel button text.
     */
    abstract cancelButtonText: string;
    /**
     * Default constructor for {@link BiometricPromptOptions}.
     *
     * @param title the title to be used to prompt the user.
     * @param cancelButtonText the cancel button text.
     * @param description the optional description to be used to prompt the user.
     * @returns the created {@link BiometricPromptOptions} instance.
     */
    static create(title: string, cancelButtonText: string, description?: string): BiometricPromptOptions;
}
export declare class BiometricPromptOptionsImpl extends BiometricPromptOptions {
    title: string;
    description?: string;
    cancelButtonText: string;
    constructor(title: string, cancelButtonText: string, description?: string);
}
//# sourceMappingURL=BiometricPromptOptions.d.ts.map