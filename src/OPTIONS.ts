import create from '.Object.create';
import assign from '.Object.assign';

const OPTIONS :OPTIONS =
	/*#__PURE__*/
	assign(create(null), {
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