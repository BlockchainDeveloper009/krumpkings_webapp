// Add this import line at the top
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

// Add this component next to your minting button
<CrossmintPayButton
    clientId="_YOUR_CLIENT_ID_"
    environment="_ENVIRONMENT_"
    mintConfig={{
        type: "erc-721",
        quantity: "_NUMBER_OF_NFTS_",
        totalPrice: "_PRICE_IN_ETH_"
        // your custom minting arguments...
    }}
/>