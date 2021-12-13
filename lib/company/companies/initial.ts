import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'

import type Company from '..'

/**
 * - `Company[]`: Successfully loaded companies.
 * - `null`: Restricted.
 * - `undefined`: Not loaded.
 */
const initialCompanies: Writable<Company[] | null | undefined> = writable()

export default initialCompanies
