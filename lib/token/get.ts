import getCookie from '../cookie/get'

const getToken = (header: string | undefined) => getCookie(header, 'token')

export default getToken
