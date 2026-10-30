// crypto-address-validator
// Lightweight, zero-dependency FORMAT validation for crypto addresses.
// Note: this checks the shape/pattern of an address, not its checksum.
// It's useful for quick UI validation and typo-catching, not for proving
// an address is spendable. For full safety, rely on your wallet/library.

/** @type {Record<string, RegExp[]>} */
export const patterns = {
  // EVM chains share the same 0x-address format
  ethereum:  [/^0x[a-fA-F0-9]{40}$/],
  bnb:       [/^0x[a-fA-F0-9]{40}$/],
  polygon:   [/^0x[a-fA-F0-9]{40}$/],
  arbitrum:  [/^0x[a-fA-F0-9]{40}$/],
  optimism:  [/^0x[a-fA-F0-9]{40}$/],
  base:      [/^0x[a-fA-F0-9]{40}$/],
  avalanche: [/^0x[a-fA-F0-9]{40}$/],

  bitcoin:   [/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/, /^bc1[a-z0-9]{25,90}$/],
  litecoin:  [/^[LM][a-km-zA-HJ-NP-Z1-9]{26,33}$/, /^ltc1[a-z0-9]{25,90}$/],
  dogecoin:  [/^D[a-km-zA-HJ-NP-Z1-9]{33}$/],
  solana:    [/^[1-9A-HJ-NP-Za-km-z]{32,44}$/],
  tron:      [/^T[a-km-zA-HJ-NP-Z1-9]{33}$/],
  xrp:       [/^r[a-km-zA-HJ-NP-Z1-9]{24,34}$/],
  cosmos:    [/^cosmos1[a-z0-9]{38}$/],
};

export const networks = Object.keys(patterns);

/**
 * Check whether an address matches the format of a given network.
 * @param {string} address
 * @param {string} network  one of `networks`
 * @returns {boolean}
 */
export function isValid(address, network) {
  if (typeof address !== 'string') return false;
  const list = patterns[String(network).toLowerCase()];
  if (!list) throw new Error(`Unknown network: ${network}`);
  return list.some((re) => re.test(address.trim()));
}

/**
 * Return every network whose format the address matches.
 * (EVM chains all match the same 0x format.)
 * @param {string} address
 * @returns {string[]}
 */
export function detect(address) {
  if (typeof address !== 'string') return [];
  const a = address.trim();
  return networks.filter((n) => patterns[n].some((re) => re.test(a)));
}

export default { patterns, networks, isValid, detect };
