// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";
const yourAlchemyApiKey = '3b2s_ycI-VRJbbV-stREOv_x1w3XC5LQ';
const config = {
  apiKey: yourAlchemyApiKey,
  network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(config);

// Address we want get NFT mints from
const toAddress = "0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5";
const ownerAddr = "0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5";//"0xshah.eth";
const res = await alchemy.core.getAssetTransfers({
  fromBlock: "0x0",
  fromAddress: "0x0000000000000000000000000000000000000000",
  toAddress: toAddress,
  excludeZeroValue: true,
  category: ["erc1155"], //category: ["erc721", "erc1155"],
});

// Print contract address and tokenId for each NFT (ERC721 or ERC1155):
for (const events of res.transfers) {
  if (events.erc1155Metadata == null) {
    console.log(
      "ERC-721 Token Minted: ID- ",
      events.tokenId,
      " Contract- ",
      events.rawContract.address
    );
  } else {
    for (const erc1155 of events.erc1155Metadata) {
      console.log(
        "ERC-1155 metaToken Minted: ID- ",
        erc1155.tokenId,
        " Contract- ",
        events.rawContract.address
      );
    }

    for (const erc1155 of events.erc1155Metadata) {
      console.log('-------')
      console.log(
        erc1155
      );
      console.log('------->>>>>')


      

    }
  }

  console.log('======')
console.log(events)
  console.log('======')
}