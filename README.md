# TON Lottery Demo frontend

Notes:

- When using outside Vite, be sure to use a proper polyfill for Node.js' `Buffer` for `@ton/ton`
  (instead of `vite-plugin-node-polyfills`);
- The contract interface was copy-pasted from the contract repo, so it may be a good idea to have a monorepo instead;
  however, build fails until the unused `config` argument of `lotteryConfigToCell` is commented out.
