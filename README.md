# crypto-address-validator

Lightweight, **zero-dependency** format validation for crypto addresses across 14 networks. Great for quick UI checks and catching typos before a user sends funds.

> ⚠️ **Scope:** this validates the **format** (shape/pattern) of an address — it does **not** verify the checksum (e.g. EIP-55, Base58Check). A format-valid address can still be a mistyped one. For full guarantees, rely on your wallet or a full-featured library. Always send a small test transaction first.

## Install
Copy `index.js` into your project, or clone the repo. ES module, no dependencies.

```js
import { isValid, detect, networks } from './index.js';
```

## Usage

```js
import { isValid, detect } from './index.js';

isValid('0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed', 'ethereum'); // true
isValid('1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2', 'bitcoin');          // true
isValid('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', 'bitcoin');  // true
isValid('not-an-address', 'ethereum');                             // false

detect('0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed');
// -> ['ethereum', 'bnb', 'polygon', 'arbitrum', 'optimism', 'base', 'avalanche']
```

Run the example:
```bash
npm run example
```

## API
- `isValid(address, network)` → `boolean` — does the address match that network's format? Throws on an unknown network.
- `detect(address)` → `string[]` — every network whose format the address matches (EVM chains share one format).
- `networks` → `string[]` — supported network keys.
- `patterns` → `Record<string, RegExp[]>` — the raw patterns.

## Supported networks
`ethereum`, `bnb`, `polygon`, `arbitrum`, `optimism`, `base`, `avalanche` (EVM `0x…`), `bitcoin`, `litecoin`, `dogecoin`, `solana`, `tron`, `xrp`, `cosmos`.

See also [supported-chains](https://github.com/git-wallet/supported-chains) for chain metadata.

## License
[MIT](LICENSE) · maintained by [GitWallet](https://gitwallet.net)
