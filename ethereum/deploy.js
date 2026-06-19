// Truffle HDWalletProvider is used to deploy contracts via an Infura node.
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const MNEMONIC = process.env.MNEMONIC;
const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
const INFURA_NETWORK = process.env.INFURA_NETWORK || 'sepolia';

if (!MNEMONIC || !INFURA_PROJECT_ID) {
  console.error('Missing MNEMONIC or INFURA_PROJECT_ID. Set them in your environment before deploying.');
  process.exit(1);
}

const provider = new HDWalletProvider(
  MNEMONIC,
  `https://${INFURA_NETWORK}.infura.io/v3/${INFURA_PROJECT_ID}`
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Using account:', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '10000000', gasPrice: '2000000000' });

  console.log('Contract deployed to:', result.options.address);
  provider.engine.stop();
};

deploy();