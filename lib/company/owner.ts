import { writable } from 'svelte/store'

import type User from '../user'

/**
 * - `User`: Successfully loaded user.
 * - `null`: Not found.
 * - `undefined`: Not loaded.
 */
const companyOwner = writable<User | null | undefined>()

export default companyOwner
