# CrowFunding 
### A decentralized ethereum blockchain based crowdfunding platform inspired by [kickstarter.com](https://www.kickstarter.com) 
## The Problem
To avoid Fraudulent Activities that arise around the world of StartUps and  to increase Transparency ,there are  Platforms that have been developed around it such as **Kickstarter**. 
Although stringent measures such as symmetric encryption are in place to make e-payment safe and secure, it is still vulnerable to hacking.
Enterprises with in-house e-payment systems must incur additional costs in procuring, installing and maintaining sophisticated payment-security technologies.
There is no guarantee that people who post projects on Kickstarter will deliver on their projects, use the money to implement their projects, or that the completed projects will meet backers' expectations.
This project is a mockup of [KickStarter](https://www.kickstarter.com/) built using smart contracts written in solidity. The app is built using Reactjs with the help of Nextjs.

## What We Propose
The purpose of this project is to increase the credibility of crowdfunding campaigns created by platforms such as kickstarter.com with the use of blockchain. 
- A user can become a manager of a campaign by creating a campaign and assigning a minimum contribution(in wei) that can be made to that campaign. 
- Anyone who is interested in a campaign can support that campaign by contributing some amount of eth
- The manager can create funding requests for campaigns by specifying a description, funding amount and the recipient(address) who will be receiving the fund
- At least 50% of those who contributed to the campaign needs to approve a funding request in order for the manager to be able to finalize the funding and transfer the amount to the recipient of the funding request

## Demo URL: https://crowdfunding-six.vercel.app/
> Make sure to have metamask plugin installed in your browser

## Prerequisites
- Google chrome with metamask plugin installed
- Infura endpoint to deploy contract (https://infura.io)
- Wallet mnemonic with the first wallet address containing some eth required to deploy the initial contract
- Metamask plugin should ideally be in the same network that infura url is pointing to
- Node.js
- Yarn or NPM

## Environment variables
The app now uses a standard Next.js route setup and a modern Infura network.
Set the following before running locally or deploying:
- `NEXT_PUBLIC_INFURA_PROJECT_ID` — your Infura project ID
- `NEXT_PUBLIC_INFURA_NETWORK` — network to use (default: `sepolia`)
- `NEXT_PUBLIC_FACTORY_ADDRESS` — deployed campaign factory contract address for that network

## Deploying the smart contract
To deploy the factory contract to a new testnet (recommended: Sepolia):

1. Create an Infura project and get the project ID.
2. Create a wallet mnemonic with funded testnet ETH.
3. Set env variables locally before deploy:

```bash
export MNEMONIC="your twelve word mnemonic"
export INFURA_PROJECT_ID="your-infura-project-id"
export INFURA_NETWORK="sepolia"
```

4. Run:

```bash
npm run deploy
```

5. Use the printed contract address as `NEXT_PUBLIC_FACTORY_ADDRESS` in Vercel or hardcode it in `ethereum/factory.js`.

## How to run
#### Install NodeJs and NPM
* Follow instructions from [NodeJs Website](https://nodejs.org/en/download/) 

#### Install the required dependencies
```sh
  npm install 
```

#### Compile contracts in `ethereum>contracts>Campaign.sol`
```sh
  cd ethereum/contracts
  node compile.js
```

#### Test compiled Campaign contract inside test>
```
node test.js
```

#### Deploy the compiled contract 
```sh
node deploy.js
```


#### To run Next.js in development mode, run the following command

```sh
npm run dev
```
* Access the [Application](http://localhost:3000)


### Technology Stack
* ReactJs
* Solidity
* NextJs
* Ethereum Smart Contract

## Features
#### Secure Investment
Information is stored across a network of computers instead of on a single server, makes it very difficult for hackers to compromise the transaction data.
#### Voting Power for Investors
The creator can only use the money if a minimum number of contributors approve a certain request. It will make sure the money is used for Necessities rather than Luxuries.

## Future work
- Improve overall UI/UX
- Add profit distribution mechanism so that profit that is generated is automatically distributed  among the investors providing investors with additional layer of security of interests of investors.



## Authors

- [@shreyash bhimanwar](https://www.github.com/octokatherine)
- [@Onkar Viralekar](https://github.com/onkar-1432)

