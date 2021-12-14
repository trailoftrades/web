import { getFirestore } from 'firebase-admin/firestore'

import type Evaluation from '.'
import app from '../../app/admin'
import getCompany from '../get'
import get from '../../snapshot/get'

const firestore = getFirestore(app)

const getEvaluations = async (id: string) => {
	const company = await getCompany(id)
	if (company?.created == null) return null

	const { docs } = await firestore
		.collection(`companies/${company.id}/evaluations`)
		.get()

	return docs.reduce<Evaluation[]>((evaluations, snapshot) => {
		const time = parseInt(snapshot.id)

		if (!Number.isNaN(time))
			evaluations.push({
				time,
				rate: get(snapshot, 'rate', 'number', 0),
				cash: get(snapshot, 'cash', 'number', 0)
			})

		return evaluations
	}, [])
}

export default getEvaluations
