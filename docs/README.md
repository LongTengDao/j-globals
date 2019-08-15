
```js
const Globals = require('@ltd/j-globals');

Globals.get('document.head');
// 'export default document.head;'

const globals = new Globals;

globals.get('Array.isArray');
// 'export default Array.isArray;'

globals.get('Object.is');
// 'export default Object.is;'

[ ...globals ];
// [ 'Array.isArray', 'Object.is' ]

globals.toTSD({ pre: '=' });
/* `
declare module '=Array.isArray' { export default Array.isArray; }
declare module '=Object.is' { export default Object.is; }
` */
```
