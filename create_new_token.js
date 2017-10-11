var Web3 = require('web3');
var solc = require('solc');
const fs = require("fs");
var web3;

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

//var coin_sorce = 'contract JapanCoin{address public minter;mapping(address=>uint) public balances;event Sent(address from,address to,uint amount);function JapanCoin(){minter=msg.sender;}function mint(address receiver,uint amount){if(msg.sender!=minter) return;balances[receiver]+=amount;}function send(address receiver,uint amount){if(balances[msg.sender]<amount)return;balances[msg.sender]-=amount;balances[receiver]+=amount;Sent(msg.sender,receiver,amount);}}';
//var coin_sorce = fs.readFileSync('RedmoonToken.sol', 'utf8');
var coin_sorce = fs.readFileSync('./contract/RedMoonCoin.sol', 'utf8');

// コンパイル
var compiledContract = solc.compile(coin_sorce, 1);
// ABIを取得(配列のキーはなぜか頭に:が必要でした)
var abi = compiledContract.contracts[':RedMoonCoin'].interface;
//
var bytecode = "0x" + compiledContract.contracts[':RedMoonCoin'].bytecode;
// デプロイに必要なGasを問い合わせる
var gasEstimate = web3.eth.estimateGas({data: bytecode});
//
var TestContract = web3.eth.contract(JSON.parse(abi));

web3.personal.unlockAccount(web3.eth.accounts[1], "password");

TestContract.new(
  10000000,
  {from: web3.eth.accounts[1], data:bytecode, gas:gasEstimate },
    function(err, myContract){
      if (!err) {
        // 注意：这个回调会触发两次
        //一次是合约的交易哈希属性完成
        //另一次是在某个地址上完成部署

        // 通过判断是否有地址，来确认是第一次调用，还是第二次调用。
        if (!myContract.address) {
            console.log("contract deploy transaction hash: " + myContract.transactionHash) //部署合约的交易哈希值

            // 合约发布成功后，才能调用后续的方法
        } else {
            console.log("contract deploy address: " + myContract.address) // 合约的部署地址

            //使用transaction方式调用，写入到区块链上
            //myContract.add.sendTransaction(1, 2,{
            //    from: deployeAddr
            //});
            console.log("#####################");
            console.log(myContract);
            console.log("#####################");
            //console.log("after contract deploy, call:" + myContract.getCount.call());
        }

        // 函数返回对象`myContractReturned`和回调函数对象`myContract`是 "myContractReturned" === "myContract",
        // 所以最终`myContractReturned`这个对象里面的合约地址属性也会被设置。
        // `myContractReturned`一开始返回的结果是没有设置的。
    }
  });
