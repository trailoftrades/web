import type { Page } from '@sveltejs/kit'
import { getAnalytics, logEvent } from 'firebase/analytics'

import getApp from '../app'

const analytics = getAnalytics(getApp())

const setPage = ({ path, query }: Page) => {
	const queryString = query.toString()

	logEvent(analytics, 'page_view', {
		page_path: `${path}${queryString && '?'}${queryString}`
	})
}

export default setPage
