//ETH 残高・送金の例
const Web3 = require('web3');

web3 = new Web3();
// providerとの接続
if (!web3.currentProvider) {
    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
}

console.log("accounts[0]:", web3.eth.accounts[0]);
console.log("accounts[1]:", web3.eth.accounts[1]);

//パスワード入力
web3.personal.unlockAccount(web3.eth.accounts[0], "xxxxxx");

// 残高確認
var user1_balance = web3.eth.getBalance(web3.eth.accounts[0]);
var user2_balance = web3.eth.getBalance(web3.eth.accounts[1]);
console.log(user1_balance);
console.log(user2_balance);

// eth送金
web3.eth.sendTransaction({from:web3.eth.accounts[0],to:web3.eth.accounts[1], value:web3.toWei(0.01,"ether")});
