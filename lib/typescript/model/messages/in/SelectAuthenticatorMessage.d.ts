/**
 * Copyright © 2023 Nevis Security AG. All rights reserved.
 */
import { AuthenticatorSelectionContext } from '../../../operations/selection/AuthenticatorSelectionContext';
import { ChannelMessage } from '../ChannelMessage';
/**
 * Holds the parameters of the select authenticator native event.
 */
export declare class SelectAuthenticatorMessage extends ChannelMessage {
    /**
     * The identifier of the operation.
     */
    operationId: string;
    /**
     * The authenticator selection context.
     */
    context: AuthenticatorSelectionContext;
    /**
     * Default constructor for {@link SelectAuthenticatorMessage}.
     *
     * @param operationId the identifier of operation.
     * @param context the authenticator selection context.
     */
    private constructor();
    /**
     * Alternate constructor that creates a {@link SelectAuthenticatorMessage} from a json.
     *
     * @param json contains the source for instance creation.
     * @returns the created instance.
     */
    static fromJson(json: any): SelectAuthenticatorMessage;
}
//# sourceMappingURL=SelectAuthenticatorMessage.d.ts.map