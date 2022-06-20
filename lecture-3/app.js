/**
 * Types of modules in Node:
 * 1. File-based (lecture-1)
 * 2. External (modules that we need to install)
 * 3. Core (modules that come with Node installation)
 */

const moduleFaker = require('@faker-js/faker');

console.log(moduleFaker.faker.finance.creditCardNumber());
console.log(moduleFaker.faker.name.firstName());
console.log(moduleFaker.faker.name.lastName());
