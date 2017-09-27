# Example for ethereum and custom token (web3 + parity)
node   :   v6.11.2

web3   :  0.20.2

Parity :  Parity/v1.6.10-stable-1a5b176-20170721/x86_64-macos/rustc1.18.0

solc   :  0.4.12

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


# 7.　各ファイルの説明

・create_new_token.js　　　　   (新token作成)

・eth_getbalance_transfer.js　　(ethereum coinの残高・送金)

・token_getbalance_transfer.js  (token の残高・送金)



# good luck!
