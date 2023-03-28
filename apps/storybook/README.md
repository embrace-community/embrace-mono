# Design-System

## Troubleshooting

if you see an error related to

```shell
node:internal/crypto/hash:67
  this[kHandle] = new _Hash(algorithm, xofLen);
```

use `export NODE_OPTIONS=--openssl-legacy-provider` in your shell.
