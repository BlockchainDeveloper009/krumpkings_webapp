import { useState } from 'react';
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

function AddMintingUsingCrossMintButton() {
  const [mintAmount, setMintAmount] = useState(1);
  const nftCost = 0.002;
  const clientId = '951df0b4-3007-40e6-a8ca-ada730720d3f';
  const environment = 'staging';
  const operator = '0x6C3b3225759Cbda68F96378A9F0277B4374f9F06';
  const tokenId = '7';
  const quantity = '1';

//0xF211AECAe675Fa8A2bab950f83779eC2241F16FB
  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  }

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}> - </button>
      <input 
        readOnly
        type="number" 
        value={mintAmount} 
      />
      <button onClick={handleIncrement}> + </button>

      {/* <CrossmintPayButton
        clientId={clientId}
        environment={environment}
        mintConfig={{
        _tokenId: tokenId,
        _operator: operator,
        quantity: quantity, // the `_quantity` property should match what is in your mint function
        totalPrice: (nftCost * mintAmount).toString(),

        
        }}
      /> */}
    </div>
  );
}

export default AddMintingUsingCrossMintButton;

{/* <CrossmintPayButton
        clientId={clientId}
        environment={environment}
        mintConfig={{
        _tokenId: tokenId,
        _operator: operator,
        quantity: quantity, // the `_quantity` property should match what is in your mint function
        totalPrice: (nftCost * mintAmount).toString(),

         //type: "erc-1155",
          //totalPrice: (nftCost * mintAmount).toString(),
          //quantity: "1" // the `_quantity` property should match what is in your mint function
          // your custom minting arguments...
        }}
      /> */}