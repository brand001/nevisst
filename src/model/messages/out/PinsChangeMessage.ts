/**
 * Copyright © 2023 Nevis Security AG. All rights reserved.
 */

import { ChannelMessage } from '../ChannelMessage';

/**
 * Holds the parameters of the PIN change call.
 */
export class PinsChangeMessage extends ChannelMessage {
	/**
	 * The identifier of the operation.
	 */
	operationId: string;

	/**
	 * The old pin.
	 */
	oldPin: string;

	/**
	 * The new pin.
	 */
	newPin: string;

	/**
	 * Default constructor for {@link PinsChangeMessage}.
	 *
	 * @param operationId the identifier of the operation.
	 * @param oldPin the old pin.
	 * @param newPin the new pin.
	 */
	constructor(operationId: string, oldPin: string, newPin: string) {
		super();
		this.operationId = operationId;
		this.oldPin = oldPin;
		this.newPin = newPin;
	}
}
