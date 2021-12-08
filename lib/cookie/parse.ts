import { parse } from 'cookie'

const parseCookies = (header: string | undefined) => parse(header ?? '')

export default parseCookies
