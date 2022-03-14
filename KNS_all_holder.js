const fs = require('fs');
const Web3 = require('web3');
const config = require('./config/params');
const utils = require('./src/utils');

const web3 = new Web3(new Web3.providers.HttpProvider(config.HTTP_PROVIDER));
const contract = new web3.eth.Contract(config.ABI_ARRAY, config.CONTRACT_ADDRESS);
var delayInMilliseconds = 500; 

(async () => {
    await utils.clearFile(config.FILE_NAME);
    await contract.methods.totalSupply().call()
        .then(async (total) => {
            const holders = [];
            for (let i = 0; i < 1398; i += 1) {
                console.log(i)
                await utils.addHolder(holders, contract, i);
                function sleep(delay) {
                    var start = (new Date()).getTime();
                    while ((new Date()).getTime() - start < delay) {
                        continue; 
                    }
                }
                sleep(300);
                
            
            }
        })
        .catch((err) => {
            console.log(err);
        });
})();




