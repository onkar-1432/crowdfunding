import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const envFactoryAddress = process.env.NEXT_PUBLIC_FACTORY_ADDRESS;
const isPlaceholderAddress =
  envFactoryAddress && envFactoryAddress === "0xYourFactoryAddress";
const resolvedEnvFactoryAddress = isPlaceholderAddress
  ? null
  : envFactoryAddress;
const factoryAddress = web3.utils.isAddress(resolvedEnvFactoryAddress)
  ? resolvedEnvFactoryAddress
  : '0xf767C6D2d8277FFB6fAf147C0950785Bfd644645';

let instance = null;

if (
  resolvedEnvFactoryAddress &&
  !web3.utils.isAddress(resolvedEnvFactoryAddress)
) {
  console.warn(
    `NEXT_PUBLIC_FACTORY_ADDRESS is invalid: ${resolvedEnvFactoryAddress}. Falling back to hardcoded factory address ${factoryAddress}.`
  );
}

if (!web3.utils.isAddress(factoryAddress)) {
  console.warn(
    `Factory address is invalid: ${factoryAddress}. Skipping factory contract initialization.`
  );
} else {
  instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), factoryAddress);
}

export default instance;
