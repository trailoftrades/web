import type Snapshot from '.'
import type DateLike from './date'

export type ValueType = 'string' | 'number' | 'millis'

const get = <Value, DefaultValue>(
	snapshot: Snapshot,
	key: string,
	type: ValueType,
	defaultValue: DefaultValue
) => {
	const value = snapshot.get(key)

	if (type === 'millis')
		return typeof (value as DateLike)?.toMillis === 'function'
			? ((value as DateLike).toMillis() as unknown as Value)
			: defaultValue

	return typeof value === type ? (value as Value) : defaultValue
}

export default get
