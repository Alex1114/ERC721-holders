const fs = require('fs');
const Web3 = require('web3');
const config = require('./config/params');
const utils = require('./src/utils');

const web3 = new Web3(new Web3.providers.HttpProvider(config.HTTP_PROVIDER));
const contract = new web3.eth.Contract(config.ABI_ARRAY, config.CONTRACT_ADDRESS);

(async () => {
    // await utils.clearFile(config.FILE_NAME);
    await contract.methods.totalSupply().call()
        .then(async (total) => {
            const holders = [];
            for (let i = 26000; i < 30008; i += 1) {
                utils.addHolder(holders, contract, i);
            
            }
        })
        .catch((err) => {
            console.log(err);
        });
})();
