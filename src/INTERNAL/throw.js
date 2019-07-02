export default (
	/*! j-globals: throw (internal) */
	function THROW (error) {
		throw error;
	}
	/*¡ j-globals: throw (internal) */
);

export { throwError }; import { throwError } from '.throw.Error';
export { throwEvalError }; import { throwEvalError } from '.throw.EvalError';
export { throwRangeError }; import { throwRangeError } from '.throw.RangeError';
export { throwReferenceError }; import { throwReferenceError } from '.throw.ReferenceError';
export { throwSyntaxError }; import { throwSyntaxError } from '.throw.SyntaxError';
export { throwTypeError }; import { throwTypeError } from '.throw.TypeError';
export { throwURIError }; import { throwURIError } from '.throw.URIError';

[ throwError, throwEvalError, throwRangeError, throwReferenceError, throwSyntaxError, throwTypeError, throwURIError ];