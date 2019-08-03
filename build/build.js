'use strict';

require('@ltd/j-dev')(__dirname+'/..')(async ({ build, 龙腾道, get, ful }) => {
	await build({
		name: 'j-globals',
		user: 'LongTengDao@ltd',
		Auth: 龙腾道,
		Copy: 'LGPL-3.0',
		semver: await get('src/version'),
		ES: 6,
		NPM: {
			description: 'Module style global properties sharing loading plan. Belong to "Plan J".／模块化全局属性共享获取方案。从属于“简计划”。',
		},
		LICENSE_: true,
		locate: {
			'@ltd/j-es': ful('../../LongTengDao/j-es/dist/ESM/.j-es.js'),
		},
	});
});
