import { Action } from '../lib/structures/Action';
import { extender } from '../util/Extender';

import type { GuildRoleCreateDispatch } from '@klasa/ws';
import type { Role } from '../client/caching/structures/guilds/Role';

export default class CoreAction extends Action {

	public check(data: GuildRoleCreateDispatch): Role | null {
		return this.client.guilds.get(data.d.guild_id)?.roles.get(data.d.role.id) ?? null;
	}

	public build(data: GuildRoleCreateDispatch): Role | null {
		const guild = this.client.guilds.get(data.d.guild_id);
		if (!guild) return null;

		return new (extender.get('Role'))(this.client, data.d.role);
	}

	public cache(data: Role): void {
		data.guild.roles.set(data.id, data);
	}

}