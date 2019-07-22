export = exports;

declare class exports extends Set<string> {
	constructor ();
	static get (id :string, options? :{ bom? :boolean, tab? :string, eol? :string, pre? :string, sur? :string }) :string;
	get (this :exports, id :string, options? :{ bom? :boolean, tab? :string, eol? :string, pre? :string, sur? :string }) :string;
	toTSD (this :exports, options? :{ bom? :boolean, tab? :string, eol? :string, pre? :string, sur? :string }) :string;
	shakingMap (this :exports) :Map<string, string>;
}

declare namespace exports {
	export const version :'4.3.1';
	export class Globals extends Set<string> {
		constructor ();
		static get (id :string, options? :{ bom? :boolean, tab? :string, eol? :string, pre? :string, sur? :string }) :string;
		get (this :Globals, id :string, options? :{ bom? :boolean, tab? :string, eol? :string, pre? :string, sur? :string }) :string;
		toTSD (this :Globals, options? :{ bom? :boolean, tab? :string, eol? :string, pre? :string, sur? :string }) :string;
		shakingMap (this :Globals) :Map<string, string>;
	}
	export { exports as default };
}
