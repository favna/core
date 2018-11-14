import BitField, { BitFieldResolvable } from './base/BitField';

/**
 * Handles Permission BitFields in D.TS
 */
export default class Permissions extends BitField {

	/**
	 * Determines if this Permissions includes a permission or permissions
	 * @param permission The permission/s to check for
	 * @param checkAdmin Whether this should account for implied Administrator permissions
	 */
	public has(permission: BitFieldResolvable, checkAdmin: boolean = false) {
		const constructor = <typeof Permissions> this.constructor;
		if (checkAdmin && super.has(constructor.FLAGS.ADMINISTRATOR)) return true;
		return super.has(permission);
	}

	/**
	 * The Permissions flags
	 */
	/* tslint:disable:object-literal-sort-keys */
	public static FLAGS: any = {
		CREATE_INSTANT_INVITE: 1 << 0,
		KICK_MEMBERS: 1 << 1,
		BAN_MEMBERS: 1 << 2,
		ADMINISTRATOR: 1 << 3,
		MANAGE_CHANNELS: 1 << 4,
		MANAGE_GUILD: 1 << 5,
		ADD_REACTIONS: 1 << 6,
		VIEW_AUDIT_LOG: 1 << 7,
		PRIORITY_SPEAKER: 1 << 8,

		VIEW_CHANNEL: 1 << 10,
		SEND_MESSAGES: 1 << 11,
		SEND_TTS_MESSAGES: 1 << 12,
		MANAGE_MESSAGES: 1 << 13,
		EMBED_LINKS: 1 << 14,
		ATTACH_FILES: 1 << 15,
		READ_MESSAGE_HISTORY: 1 << 16,
		MENTION_EVERYONE: 1 << 17,
		USE_EXTERNAL_EMOJIS: 1 << 18,

		CONNECT: 1 << 20,
		SPEAK: 1 << 21,
		MUTE_MEMBERS: 1 << 22,
		DEAFEN_MEMBERS: 1 << 23,
		MOVE_MEMBERS: 1 << 24,
		USE_VAD: 1 << 25,

		CHANGE_NICKNAME: 1 << 26,
		MANAGE_NICKNAMES: 1 << 27,
		MANAGE_ROLES: 1 << 28,
		MANAGE_WEBHOOKS: 1 << 29,
		MANAGE_EMOJIS: 1 << 30
	};
	/* tslint:enable:object-literal-sort-keys */

	/**
	 * The value of all permissions in this bitfield
	 */
	public static ALL: number = Object.values<number>(Permissions.FLAGS).reduce<number>((all, p) => all | p, 0);

	/**
	 * The default permissions granted
	 */
	public static DEFAULT: number = 104324097;

}