// web3@0.20.2
// Red Moon Token: balance and transfer example

const Web3 = require('web3');

web3 = new Web3();
// providerとの接続
if (!web3.currentProvider) {
    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
}

var version = web3.version.api;
console.log(version);

var abi = [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"total","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];

// Red Moon Token: contract address
var address = "0x2dc77B8F56Ec945838d7D997757522e6988eE24F";
var TestContract = web3.eth.contract(abi);
var contract = TestContract.at(address);

console.log("accounts[0]:", web3.eth.accounts[0]);
console.log("accounts[1]:", web3.eth.accounts[1]);

web3.personal.unlockAccount(web3.eth.accounts[0], "xxxxxx");

var user1_balance = contract.balanceOf(web3.eth.accounts[0]);
var user2_balance = contract.balanceOf(web3.eth.accounts[1]);
console.log(user1_balance);
console.log(user2_balance);

contract.transfer(web3.eth.accounts[1],22222,{from:web3.eth.accounts[0]});

