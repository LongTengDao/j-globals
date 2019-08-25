import create from '.Object.create';
import assign from '.Object.assign';

import NULL from './NULL';

const OPTIONS :OPTIONS =
	/*#__PURE__*/
	assign(create(NULL), {
		bom: false,
		tab: '\t',
		eol: '\n',
		pre: '.',
		sur: '',
	});

type OPTIONS = {
	bom? :boolean,
	tab? :string,
	eol? :string,
	pre? :string,
	sur? :string,
};

export default OPTIONS;