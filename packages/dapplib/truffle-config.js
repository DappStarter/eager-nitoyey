require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone street cruise spider upset grace sister army gift'; 
let testAccounts = [
"0x91c8b7243c19b9c22e0a4672f4c546b92ed6e854b5ca1cb8c1063c48a6234f65",
"0xfd365954039322fcc251a6e11f404fae94c14e965ca743d94eea9ad2a305d5ce",
"0x3a2b49f6e6be2af2bf24b4ea79e07c2d37df1b89ed34aad00f4cdfa0a7641ed5",
"0xbf0894b1708f4579c79089d1e39a6860dad1868a256686610ee3ea53dc20ad2f",
"0x6a355dff7d213f60ab7ab203145dfcccbb2dac8937d0720daa716c78a66ae9dc",
"0xf4069188c0be1f5eacdff3dff86eaaae08628a9137c46bd31bf92a07d2a2d5c7",
"0x1a942da497426c317e6fa8dbb28d6c8c6e465777a7c7079769072d80d58bde98",
"0xfc687a0bb956d644169020483ec71d52339747f7bd26019712bf27e603fd595b",
"0xd002c171491b6f7a4a8f6292a6bcf051d014a09f6577768a4c2b38ee67c2fd93",
"0x5cec484ac674762d11a11e53c7e0af8d4d4bb8b9ac1b17560fa784a1cd36df6a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
