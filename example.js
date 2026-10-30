import { isValid, detect } from './index.js';

console.log(isValid('0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed', 'ethereum')); // true
console.log(isValid('1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2', 'bitcoin'));         // true
console.log(isValid('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', 'bitcoin')); // true
console.log(isValid('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t', 'tron'));            // true
console.log(isValid('not-an-address', 'ethereum'));                            // false

console.log(detect('0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed'));
// -> ['ethereum', 'bnb', 'polygon', 'arbitrum', 'optimism', 'base', 'avalanche']
