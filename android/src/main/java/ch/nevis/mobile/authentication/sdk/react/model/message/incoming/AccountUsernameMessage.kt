/*
 * Copyright © 2023 Nevis Security AG. All rights reserved.
 */

package ch.nevis.mobile.authentication.sdk.react.model.message.incoming

import kotlinx.serialization.Serializable

@Serializable
data class AccountUsernameMessage(
    override val operationId: String,
    val username: String
) : ChannelInMessage()
