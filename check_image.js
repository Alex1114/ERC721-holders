const fs = require('fs');
const Web3 = require('web3');
const config = require('./config/params');
const ObjectsToCsv = require('objects-to-csv')

const web3 = new Web3(new Web3.providers.HttpProvider(config.HTTP_PROVIDER));
const contract = new web3.eth.Contract(config.ABI_ARRAY, config.CONTRACT_ADDRESS);

var o = 0;
var x = 0;
downloaded = [];

(async () => {
    
    for (let i = 0; i < 10000; i += 1) {
        await contract.methods.tokenURI(i).call()
        .then(async (uri) => {
            downloaded.push(i);
            o += 1;
            
        })
        .catch((err) => {
            x += 1
        });

    }
    console.log("No image:", x);
    console.log("Download image:", o);
    x = 0;
    o = 0;

    fs.writeFile('0~10000.csv', String(downloaded), 'utf8', function (err) {
      if (err) {
        console.log('Some error occured - file either not saved or corrupted file saved.');
      } else{
        console.log('It\'s saved!');
      }
    });





})();
