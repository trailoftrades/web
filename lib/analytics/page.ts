import type { Page } from '@sveltejs/kit'
import { getAnalytics, logEvent } from 'firebase/analytics'

import app from '../app'
import queryString from '../query/string'

const analytics = getAnalytics(app)

const setPage = ({ path, query }: Page) =>
	logEvent(analytics, 'page_view', {
		page_path: `${path}${queryString(query)}`
	})

export default setPage
