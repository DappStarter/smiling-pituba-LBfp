require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note script company install basic equal gaze'; 
let testAccounts = [
"0x4e585d5cb65dd75c8c994909edc44e7d4d9abb77a50dc08c3e3f55ebdb1553b5",
"0xb0c0183a8683cff4e7ac3fa8afafeb180366307a3b33d3e89ad8a46964086d61",
"0xc50e93c84c61b6c8d316ec6fb2d07c914edb48ea8107665635dfced305e64f08",
"0x1e2a615bed1dcb59e043f9fb7a11a5201627c20beb7876eeeabf93d9239c834b",
"0xacf39cc67f2fa276f528378944ad1267cd8067363a1a9e9185ae697d7bf1839d",
"0xabf1bfc714750f49d84ffa798ce53f2443d9d285aba5065e04239a97335346be",
"0x98614a1a3b4d537b04569eea19944b25c8a1406ebc2bd98e53b6fd2ab2cadb84",
"0x875a50cfff8f48d82129d34d883d3d182e9b83a972919d5080324c51dba72476",
"0x1b4c6f2235cf9f578e19bfb2d2564404f6b1bd581c0ba6c23ae5ef4cd41b2c4c",
"0x79fbd984dad1cb7c2e25c1ad0a1664286b6db4c72edd110aca07b8b280b40be3"
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
            version: '^0.8.0'
        }
    }
};

