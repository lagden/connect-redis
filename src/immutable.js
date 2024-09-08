/**
 * Creates an immutable version of the given object. Any attempt to set or delete a property
 * on the returned proxy will throw an error.
 *
 * @param {Object} object - The object to be made immutable.
 * @returns {Proxy} A proxy that prevents modification of the original object.
 * @throws {Error} Throws an error if there is an attempt to change the object's properties.
 */
export function immutable(object) {
	return new Proxy(object, {
		set(target, property, value) {
			throw new Error(`Cannot set property, object is immutable.`)
		},
		deleteProperty(target, property) {
			throw new Error(`Cannot delete property, object is immutable.`)
		},
	})
}
