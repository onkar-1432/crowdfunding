import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const factoryAddress =
  process.env.NEXT_PUBLIC_FACTORY_ADDRESS ||
  '0xf19fD70799f92E053631CE4f2A6c7AbdF1eFF914';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), factoryAddress);

export default instance;