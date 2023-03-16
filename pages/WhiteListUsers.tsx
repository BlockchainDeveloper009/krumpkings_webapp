import { Box, Button, Chip, createStyles, TextInput, Title } from '@mantine/core';
import { useEffect, useState } from "react";

import {useNftDataGetterByAddressGet, Nft1Data} from '../frontend/Hooks/getLegendsOfKrump.js';
import ClaimNftComp from '../frontend/components/claimNftComp';
import { BrowserRouter } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { TimeInput } from '@mantine/dates';

let pageHeader = 'Krump Kings White Lister'
function WhiteListUsers() {
  const [emailId, setEmailId] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [actionTime, setActionTime] = useState('');
  const [submittedValues, setSubmittedValues] = useState('');
  const form = useForm({
    initialValues: {
      emailId: '',
      walletAddress: '0x',
      actionTime: ''
    },

    transformValues: (values) => ({
      EmailId: `${values.emailId}`,
      WalletAddress: `${values.walletAddress}`,
      
      ActionTime: `${values.actionTime}`,
    }),
  });
  const [time, setTIme] = useState<any>(new Date());
  async function printVal(){
    console.log(submittedValues)
  }
  return (
    <div className="App">
      
     <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
      <Title order={1}>  {pageHeader}</Title>
      <form
          onSubmit={form.onSubmit((values) => {
            setSubmittedValues(JSON.stringify(values, null, 2))
            
            setEmailId(values.EmailId)
            setWalletAddress(values.WalletAddress)
            setActionTime(values.ActionTime)
           
  
          })}
        >
           <TextInput
            
            label="Email"
            placeholder="Email"
            mt="md"
            withAsterisk
            {...form.getInputProps('EmailId')}
            // rightSection={<Loader size="xs" />}
            
            // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
          
          />
           
           <TextInput
            
            label="Wallet Address"
            placeholder="AssetId"
            mt="md"
            withAsterisk
            {...form.getInputProps('WalletAddress')}
            // rightSection={<Loader size="xs" />}
            
            // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
          
          />



<TimeInput styles={(theme) => ({
          icon: {
            color: theme.colors.orange[7]
          },
          filledVariant: {
            backgroundColor: theme.colors.blue[5]
          }
      })
    }
        format="12" label="Time " description="Central Timezone" value={time} withAsterisk>
           </TimeInput>
          <Button type="submit" mt="md" onClick={printVal}>
            Submit
          </Button>

        </form>
       
        
       
      </Box> 
        
       
       
    </div>
  );
}

export default WhiteListUsers;


