// web3@0.20.2
//ETH 残高・送金の例
const Web3 = require('web3');

web3 = new Web3();
// providerとの接続
if (!web3.currentProvider) {
    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
}

console.log("accounts[1]:", web3.eth.accounts[1]);
console.log("accounts[2]:", web3.eth.accounts[2]);

//パスワード入力
web3.personal.unlockAccount(web3.eth.accounts[1], "");

// 残高確認
var user1_balance = web3.eth.getBalance(web3.eth.accounts[1]);
var user2_balance = web3.eth.getBalance(web3.eth.accounts[2]);
console.log(user1_balance);
console.log(user2_balance);
console.log("toWei:",web3.toWei(0.01,"ether"));

ethvalue = 0.1;
var gas_limit=300000;
var gas_price = 50000000000;
// eth送金
web3.eth.sendTransaction({from:web3.eth.accounts[1],to:web3.eth.accounts[2],value:web3.toWei(ethvalue,"ether"), gas:gas_limit, gasPrice:gas_price},function(err,transactionHash){
	if(!err)
		console.log(transactionHash);
});
