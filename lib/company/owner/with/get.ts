import type CompanyWithOwner from '.'
import getUser from '../../../user/get'
import getCompany from '../../get'

const getCompanyWithOwner = async (
	id: string,
	sanitized = false
): Promise<CompanyWithOwner | null> => {
	const company = await getCompany(id)

	if (!company) return null
	if (!company.owner) return { ...company, owner: null }

	return {
		...company,
		owner: await getUser(company.owner, sanitized)
	}
}

export default getCompanyWithOwner
