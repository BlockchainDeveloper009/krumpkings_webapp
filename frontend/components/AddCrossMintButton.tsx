// Add this import line at the top
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";



import { Chip, createStyles } from '@mantine/core';
import { useEffect, useState } from "react";
const useStyles = createStyles((theme, _params, getRef) => ({
    label: {
      '&[data-checked]': {
        '&, &:hover': {
          backgroundColor: theme.colors.blue[theme.fn.primaryShade()],
          color: theme.white,
        },
  
        [`& .${getRef('iconWrapper')}`]: {
          color: theme.white,
        },
      },
    },
  
    iconWrapper: {
      ref: getRef('iconWrapper'),
    },
  }));

const clientId = 'krumpkingslegend';
const environemnt = 'staging';
const type='erc-1155';
const quantity='';
const totalPrice='0.02';

function AddCrossMintButton() {
    const [value, setValue] = useState(['react']);
    const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
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

    </div>
  );
}

export default AddCrossMintButton;
