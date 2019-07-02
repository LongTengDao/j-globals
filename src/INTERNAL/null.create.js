import undefined from '.undefined';
import Object_create from '.Object.create';
import defineProperties from '.null.defineProperties';
export default (
	/*! j-globals: null.create (internal) */
	function create (proto, descriptorMap) {
		return descriptorMap===undefined
			? /*#__PURE__*/ Object_create(proto===undefined ? null : proto)
			: /*#__PURE__*/ defineProperties(/*#__PURE__*/ Object_create(proto), descriptorMap);
	}
	/*¡ j-globals: null.create (internal) */
);