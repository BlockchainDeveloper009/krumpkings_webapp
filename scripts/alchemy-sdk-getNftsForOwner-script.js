// This script demonstrates access to the NFT API via the Alchemy SDK.
import { Network, Alchemy } from "alchemy-sdk";
class NftData {

  constructor(title, imageUrl,description,price,tokenId,name,attributes,balance,timelastUpdate,error) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.tokenId = tokenId;
    this.name = name;
    this.attributes = attributes;
    this.balance = balance;
    this.timelastUpdate = timelastUpdate;
    this.error = error;
  
  }
}
// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "3b2s_ycI-VRJbbV-stREOv_x1w3XC5LQ", // Replace with your Alchemy API Key.
  network: Network.ETH_GOERLI, // Replace with your network.
};
const yourAlchemyApiKey = '3b2s_ycI-VRJbbV-stREOv_x1w3XC5LQ';
const alchemy = new Alchemy(settings);

// Print owner's wallet address:
const ownerAddr = "0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5";//"0xshah.eth";
console.log("fetching NFTs for address:", ownerAddr);
console.log("...");

// Print total NFT count returned in the response:
const nftsForOwner = await alchemy.nft.getNftsForOwner(ownerAddr);
console.log("number of NFTs found:", nftsForOwner.totalCount);
console.log("...");

// Print contract address and tokenId for each NFT:
for (const nft of nftsForOwner.ownedNfts) {
  console.log("===");
  console.log("contract address:", nft.contract.address);
  console.log("token ID:", nft.tokenId);
}
console.log("===");

// Print owner's wallet address:
const ownerAddr2 = "0xf821142CC270dAb63767cFAae15dC36D1b043348";//"0xshah.eth";
console.log("fetching NFTs for address:", ownerAddr2);
console.log("...");

// Print total NFT count returned in the response:
const nftsForOwner2= await alchemy.nft.getNftsForOwner(ownerAddr2);
console.log("number of NFTs found:", nftsForOwner2.totalCount);
console.group(nftsForOwner2)
console.log("...");

// Print contract address and tokenId for each NFT:
let returnArr=[];
for (const nft of nftsForOwner2.ownedNfts) {
  console.log("===");
  console.log("contract address:", nft.contract.address);
  console.log("token ID:", nft.tokenId);
  console.log(nft.rawMetadata.attributes)
   console.log(nft.rawMetadata.image)
   console.log(nft.rawMetadata.media)
   console.log(nft.media)
   let t = nftsForOwner2[0]
   console.log('hunt for image')
   console.log(t)
   console.log('close hunt')
  returnArr.push(new NftData(nft.title,
    nft.rawMetadata.image,
    nft.description,
    '0.02',
    nft.tokenId,
    nft.rawMetadata.name,
    nft.attributes,
    nft.balance,
    nft.timeLastUpdated,
    nft.metadataError))

   console.log('---------------------------------------------------------------------------------')
   console.log(nft)
   console.log('nft overrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
  if(nft.tokenId==0 && nft.contract.address == 0xaf9269c99761441687fa714c69776995f0ee8817){
   
    console.log("km------------------------------------->token ID:", nft.tokenId);
    const { k,m} = nft.rawMetadata;
    console.log(k)
    console.log(m)
    console.log('kkkkkkkk')
    console.log(nft)
    console.log('llllllllll')
  }
 
 
}
console.log('all array')
console.log(returnArr)
console.log("===");
//wallet1: 0x1d44eeda66cfdd27189373d8b6d12ef9f549f3d5
//wallet2: 0xf821142CC270dAb63767cFAae15dC36D1b043348
// Fetch metadata for a particular NFT:
console.log("fetching metadata for a Crypto Coven NFT...");
const response = await alchemy.nft.getNftMetadata(
  "0x31e5c473bc1bb22d1f85b6a83d3e959844f0b463",
  "1590"
);

// Uncomment this line to see the full api response:
// console.log(response);

// Print some commonly used fields:
console.log("NFT name: ", response.title);
console.log("token type: ", response.tokenType);
// console.log("tokenUri: ", response.tokenUri.gateway);
console.log("image url: ", response.rawMetadata.image);
console.log("time last updated: ", response.timeLastUpdated);
console.log("===");

/*
  contract address: 0x8c7e34f49a25e0f47b9161aafadeca405dc47e1c
  token ID: 6
  {
    contract: {
      address: '0x8c7e34f49a25e0f47b9161aafadeca405dc47e1c',
      name: undefined,
      symbol: undefined,
      totalSupply: '1',
      tokenType: 'ERC1155',
      openSea: {
        floorPrice: undefined,
        collectionName: undefined,
        safelistRequestStatus: undefined,
        imageUrl: undefined,
        description: undefined,
        externalUrl: undefined,
        twitterUsername: undefined,
        discordUrl: undefined,
        lastIngestedAt: '2023-02-05T18:22:23.000Z'
      },
      contractDeployer: '0x28e1dd71bc787f1e2b7e92b022607053d2486864',
      deployedBlockNumber: 7974142
    },
    tokenId: '6',
    tokenType: 'ERC1155',
    title: '',
    description: '',
    timeLastUpdated: '2023-02-11T20:05:38.044Z',
    metadataError: 'Malformed token uri, do not retry',
    rawMetadata: { metadata: [], attributes: [] },
    tokenUri: undefined,
    media: [],
    spamInfo: undefined,
    balance: 1
  }
  ===
  contract address: 0xb0272e13097e3d7ae9859af2fcda3be0d85c59d9
  token ID: 0
  {
    contract: {
      address: '0xb0272e13097e3d7ae9859af2fcda3be0d85c59d9',
      name: undefined,
      symbol: undefined,
      totalSupply: '0',
      tokenType: 'ERC1155',
      openSea: {
        floorPrice: undefined,
        collectionName: undefined,
        safelistRequestStatus: undefined,
        imageUrl: undefined,
        description: undefined,
        externalUrl: undefined,
        twitterUsername: undefined,
        discordUrl: undefined,
        lastIngestedAt: '2023-02-07T08:22:11.000Z'
      },
      contractDeployer: '0x28e1dd71bc787f1e2b7e92b022607053d2486864',
      deployedBlockNumber: 7972642
    },
    tokenId: '0',
    tokenType: 'ERC1155',
    title: '',
    description: '',
    timeLastUpdated: '2023-02-11T20:05:38.045Z',
    metadataError: 'Malformed token uri, do not retry',
    rawMetadata: { metadata: [], attributes: [] },
    tokenUri: undefined,
    media: [],
    spamInfo: undefined,
    balance: 1
  }
  ===
  contract address: 0x22dbb5357c23d8871076d643d2cbc5fd2133fa77
  token ID: 0
  {
    contract: {
      address: '0x22dbb5357c23d8871076d643d2cbc5fd2133fa77',
      name: 'Legends of Krump',
      symbol: undefined,
      totalSupply: undefined,
      tokenType: 'ERC1155',
      openSea: {
        floorPrice: undefined,
        collectionName: undefined,
        safelistRequestStatus: undefined,
        imageUrl: undefined,
        description: undefined,
        externalUrl: undefined,
        twitterUsername: undefined,
        discordUrl: undefined,
        lastIngestedAt: '2023-02-07T17:21:55.000Z'
      },
      contractDeployer: '0x1d44eeda66cfdd27189373d8b6d12ef9f549f3d5',
      deployedBlockNumber: 8451485
    },
    tokenId: '0',
    tokenType: 'ERC1155',
    title: 'KrumpKings-set16-8',
    description: 'Battle for existence',
    timeLastUpdated: '2023-02-11T19:57:15.512Z',
    metadataError: undefined,
    rawMetadata: {
      name: 'KrumpKings-set16-8',
      description: 'Battle for existence',
      image: 'ipfs//QmZqF4PxcvtobxCGQfhd9iJp4pujAmUiNQGA8hqTzew7jD/Set-16-(8).jpg',
      attributes: [ [Object], [Object], [Object], [Object] ],
      properties: { fanciness: 8, rarity: 'very rare' }
    },
    tokenUri: {
      gateway: 'https://alchemy.mypinata.cloud/ipfs/QmWBaJhyQccMH8Kv92d1v8B8kqpMLg9vAKKkVTXYUQWa9w/0.json',
      raw: 'ipfs://QmWBaJhyQccMH8Kv92d1v8B8kqpMLg9vAKKkVTXYUQWa9w/0.json'
    },
    media: [
      {
        gateway: '',
        raw: 'ipfs//QmZqF4PxcvtobxCGQfhd9iJp4pujAmUiNQGA8hqTzew7jD/Set-16-(8).jpg'
      }
    ],
    spamInfo: undefined,
    balance: 1
  }
  ===
  fetching metadata for a Crypto Coven NFT...
  NFT name:
  token type:  ERC1155
file:///C:/Repository/nodejs/mantis_nextjs_ts_service_sector_website/krumpkings_webapp/scripts/alchemy-sdk-script.js:64
console.log("tokenUri: ", response.tokenUri.gateway);

*/ 
/*

fetching NFTs for address: 0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5
...
number of NFTs found: 9
...
===
contract address: 0x0af95d7e4441922e73bfdde0cd5970e8ede58a0e -- BuyBond
token ID: 0
===
contract address: 0x22dbb5357c23d8871076d643d2cbc5fd2133fa77 -- Mint
token ID: 0
===
contract address: 0x31e5c473bc1bb22d1f85b6a83d3e959844f0b463 -- Mint
token ID: 0
===
contract address: 0x31e5c473bc1bb22d1f85b6a83d3e959844f0b463 -- Mint
token ID: 1
===
contract address: 0x31e5c473bc1bb22d1f85b6a83d3e959844f0b463 -- Mint
token ID: 2
===
contract address: 0x8c7e34f49a25e0f47b9161aafadeca405dc47e1c -- BuyBond
token ID: 6
===
contract address: 0xb0272e13097e3d7ae9859af2fcda3be0d85c59d9 -- BuyBond
token ID: 0
===
contract address: 0xb3865282170a6cff1132e92c0b62554cc3bcc39b -- BuyBond
token ID: 0
===
contract address: 0xde730cb664059411dc0ac023e455f3fa0e7a00db
token ID: 0
===
fetching metadata for a Crypto Coven NFT...
NFT name:  
token type:  UNKNOWN
file:///C:/Repository/nodejs/mantis_nextjs_ts_service_sector_website/krumpkings_webapp/scripts/alchemy-sdk-script.js:43
console.log("tokenUri: ", response.tokenUri.gateway);
                                            ^

TypeError: Cannot read property 'gateway' of undefined
    at file:///C:/Repository/nodejs/mantis_nextjs_ts_service_sector_website/krumpkings_webapp/scripts/alchemy-sdk-script.js:43:45
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
PS C:\Repository\nodejs\mantis_nextjs_ts_service_sector_website\krumpkings_webapp\scripts> 

*/