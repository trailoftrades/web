import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'

import type Company from '..'

/**
 * - `Company`: Successfully loaded company.
 * - `null`: Not found.
 * - `undefined`: Not loaded.
 */
const initialCompany: Writable<Company | null | undefined> = writable()

export default initialCompany
