#!/usr/bin/env node
// false
![]+[]
// true
!![]+[]
// undefined
[]['']+[]
// [object Object]
({}+[])
// NaN
[]/[]+[]
// -Infinity
~[]/[]+[]
// Infinity
-~[]/[]+[]
// function Array() { [native code] }
[]['constructor']+[]
// function Boolean() { [native code] }
(![])['constructor']+[]
// function Number() { [native code] }
(+[])['constructor']+[]
// function String() { [native code] }
([]+[])['constructor']+[]
// function Object() { [native code] }
({})['constructor']+[]
// function RegExp() { [native code] }
/ /['constructor']+[]
// function Function() { [native code] }
[]['constructor']['constructor']+[]
