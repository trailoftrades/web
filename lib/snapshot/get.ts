import type Snapshot from '.'

export type ValueType = 'string' | 'number'

const get = <Value, DefaultValue>(
	snapshot: Snapshot,
	key: string,
	type: ValueType,
	defaultValue: DefaultValue
) => {
	const value = snapshot.get(key)
	return typeof value === type ? (value as Value) : defaultValue
}

export default get
