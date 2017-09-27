# Example for ethereum and custom token (web3 + parity)
node    v6.11.2

web3    0.20.2

Parity  Parity/v1.6.10-stable-1a5b176-20170721/x86_64-macos/rustc1.18.0

solc    0.4.12

# MacOS

# 1. install parity
brew install parity

# 2. install nodejs

install from the URL.

https://nodejs.org/ja/download/

# 3. install web3

npm install web3@0.20.2

# 4. install solc

npm install -g solc

# 5. start parity testnet

parity --chain ropsten --rpcapi web3,eth,net,parity,personal,parity_accounts,parity_set,signer

# 6.make sure you have eth

http://127.0.0.1:8080

you can get free testnet eth from under url:

http://faucet.ropsten.be:3001

# 7.eth_getbalance_transfer.jsの実行結果

$ node eth_getbalance_transfer.js

accounts[0]: 0x00xxxxxxxxxxxxxxxx3fee6fc20dce3cc41dd400

accounts[1]: 0x00xxxxxxxxxxxxxxxx35638727d93ede7cf779d8

{ [String: '2799975870000000000'] s: 1, e: 18, c: [ 27999, 75870000000000 ] }

{ [String: '3040000000000000000'] s: 1, e: 18, c: [ 30400 ] }


# 8.token_getbalance_transfer.js の実行結果

$ node token_getbalance_transfer.js

0.20.2

accounts[0]: 0x00xxxxxxxxxxxxxxxx3fee6fc20dce3cc41dd400

accounts[1]: 0x00xxxxxxxxxxxxxxxx35638727d93ede7cf779d8

{ [String: '4222222977778'] s: 1, e: 12, c: [ 4222222977778 ] }

{ [String: '777777022222'] s: 1, e: 11, c: [ 777777022222 ]

# good luck!
