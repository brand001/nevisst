/*
 * Copyright © 2023 Nevis Security AG. All rights reserved.
 */

package ch.nevis.mobile.authentication.sdk.react.model.message.outgoing

import kotlinx.serialization.Serializable

@Serializable
data class IsPolicyCompliantOutMessage(
    override val operationId: String,
    val isPolicyCompliant: Boolean
) : ChannelOutMessage()
