export = exports;

declare class exports extends Set<string> {
	constructor ();
	static get (id :string, options? :{ bom? :boolean, tab? :string, eol? :string, pre? :string, sur? :string }) :string;
	get (id :string, options? :{ bom? :boolean, tab? :string, eol? :string, pre? :string, sur? :string }) :string;
	toTSD (options? :{ bom? :boolean, tab? :string, eol? :string, pre? :string, sur? :string }) :string;
}

declare namespace exports {
	export const version :'3.3.1';
	export class Globals extends Set<string> {
		constructor ();
		static get (id :string, options? :{ bom? :boolean, tab? :string, eol? :string, pre? :string, sur? :string }) :string;
		get (id :string, options? :{ bom? :boolean, tab? :string, eol? :string, pre? :string, sur? :string }) :string;
		toTSD (options? :{ bom? :boolean, tab? :string, eol? :string, pre? :string, sur? :string }) :string;
	}
	export { exports as default };
}
