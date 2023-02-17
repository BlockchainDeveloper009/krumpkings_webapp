import axios from 'axios'
import React, {useEffect, useState} from 'react'

// This script demonstrates access to the NFT API via the Alchemy SDK.
import { Network, Alchemy } from "alchemy-sdk";

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
  
export function useNftDataGetterByAddressGet(ownerAddr){
    let returnArr=[];
    const [NftData, setNftData] = useState({
        loading:false,
        data:[],
        error:false
    })

    useEffect( () => {
        setNftData({
            loading: true,
            data:[],
            error: false
        })

      async function api(ownerAddr) {
         // Print total NFT count returned in the response:
 const nftsForOwner = await alchemy.nft.getNftsForOwner(ownerAddr);
console.log("number of NFTs found:", nftsForOwner.totalCount);
console.log("...");
const regex = 'ipfs//QmZqF4PxcvtobxCGQfhd9iJp4pujAmUiNQGA8hqTzew7jD'
//https://gateway.pinata.cloud/ipfs/QmZqF4PxcvtobxCGQfhd9iJp4pujAmUiNQGA8hqTzew7jD/Set-16-(8).jpg
      for (const nft of nftsForOwner.ownedNfts) {
        console.log("===");
        console.log("contract address:", nft.contract.address);
        console.log("token ID:", nft.tokenId);
        console.log(nft.rawMetadata.attributes)
         console.log(nft.rawMetadata.image)
         console.log(nft.rawMetadata.media)
         console.log(nft.media)
         let t = nftsForOwner[0]
         console.log('hunt for image')
         console.log(t)
         console.log('close hunt')
         let imgUrl = typeof(nft.rawMetadata.image) == typeof('string') ? nft.rawMetadata.image.replace(regex,'https://gateway.pinata.cloud/ipfs/QmZqF4PxcvtobxCGQfhd9iJp4pujAmUiNQGA8hqTzew7jD') :undefined
         console.log(`imgUrl==> ${imgUrl}`)
        returnArr.push(new Nft1Data(nft.title,
          imgUrl,
          nft.description,
          '0.02',
          nft.tokenId,
          nft.rawMetadata.name,
          nft.attributes,
          nft.balance,
          nft.timeLastUpdated,
          nft.metadataError)) 
      }
      setNftData({
        loading: true,
        data:returnArr,
        error: false
    })
      }
   const result =  
   api(ownerAddr)
   .then(console.log('api completed'))
   .catch(console.error)
// Print contract address and tokenId for each NFT:


console.log('result'+result)

    },[ownerAddr])

    return NftData;
}

class Nft1Data {

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