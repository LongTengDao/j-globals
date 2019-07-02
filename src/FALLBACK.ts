import assign from '.Object.assign';
import create from '.Object.create';

import _Buffer_from_ from './FALLBACK/Buffer.from?text';
import _Buffer_isBuffer_ from './POLYFILL/Buffer.isBuffer?text';

import _Object_keys_ from './FALLBACK/Object.keys?text';
import _Object_defineProperty_ from './FALLBACK/Object.defineProperty?text';

const FALLBACK = /*#__PURE__*/ assign(create(null), {
	'Object.assign': _Object_defineProperty_,
	'Object.entries': _Object_keys_,
	'Buffer.isBuffer': _Buffer_isBuffer_,
	'Buffer.from': _Buffer_from_,
}) as { [chain :string] :string };

export default FALLBACK;