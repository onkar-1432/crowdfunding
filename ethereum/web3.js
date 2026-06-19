

import Web3 from 'web3';

const INFURA_PROJECT_ID = process.env.NEXT_PUBLIC_INFURA_PROJECT_ID || 'e806fefc069e435f8c96a78bf9365cf7';
const INFURA_NETWORK = process.env.NEXT_PUBLIC_INFURA_NETWORK || 'sepolia';

let web3;

if (typeof window !== 'undefined' && window.ethereum) {
  web3 = new Web3(window.ethereum);
} else if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    `https://${INFURA_NETWORK}.infura.io/v3/${INFURA_PROJECT_ID}`
  );
  web3 = new Web3(provider);
}

export default web3;