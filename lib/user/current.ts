import { readable, get } from 'svelte/store'

import { session } from '$app/stores'

import type Session from '../data/session'

const currentUser = readable(get<Session>(session).user)

export default currentUser
