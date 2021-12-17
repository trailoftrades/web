import type User from '../../../user'
import type Company from '../..'

export default interface CompanyWithOwner extends Omit<Company, 'owner'> {
	owner: User | null
}
