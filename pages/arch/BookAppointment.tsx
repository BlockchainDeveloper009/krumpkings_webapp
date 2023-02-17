import { Box, Button, Select, Textarea, TextInput } from "@mantine/core";
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { Calendar, TimeInput, TimeRangeInput } from '@mantine/dates';
//import { GitHubLogoIcon } from '@modulz/radix-icons';

function BookAppointment() {

  
    
    const [assetId, setAssetId] = useState('');
    const [willStartDate, setWillStartDate] = useState('');
    const [willEndDate, setWillEndDate] = useState('');
    const [benefitorAddr, setbenefitorAddr] = useState('');
    const [specialInstructions, setSpecialInstructions] = useState('');
    
  
    const [submittedValues, setSubmittedValues] = useState('');
    let assets = [
        'General Visit','Vaccine','Emergency Care', 'Others'
         ];
  
    const assetIds = async () => {
      console.log(assetIds)
    }
    const form = useForm({
      initialValues: {
        willStartDate: '',
        willEndDate: '',
        Benefitor: '0x',
        AssetId: '1',
        // AssetId: [
        //   { name: 'Banana', available: true },
        //   { name: 'Orange', available: false },
        // ],
      },
  
      transformValues: (values) => ({
        AssetId: `${values.AssetId}`,
        willStartDate: `${values.willStartDate}`,
        willEndDate: `${values.willEndDate}`,
        Benefitor: `${values.Benefitor}`,
      }),
    });
  
    
    const willDatas = Array(50).fill(0).map((_, index) => `Item ${index}`);
    const [time, setTIme] = useState<any>(new Date());
    return (
      <Box sx={{ maxWidth: 400 }} mx="auto">
        
      
          <form
          onSubmit={form.onSubmit((values) => {
            setSubmittedValues(JSON.stringify(values, null, 2))
            
            setWillStartDate(values.willStartDate)
            setWillEndDate(values.willEndDate)
            setbenefitorAddr(values.Benefitor)
           
  
          })}
        >
          <h1>'--'</h1>
          <h1>''</h1>
          <h1>Appointment Form</h1>
          <TextInput
            
            label="Pet Owner's First Name/Nombre"
            placeholder="AssetId"
            mt="md"
            withAsterisk
            {...form.getInputProps('AssetId')}
            // rightSection={<Loader size="xs" />}
            
            // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
          
          />
          <TextInput
            
            label="Last Name/Nombre"
            placeholder="AssetId"
            mt="md"
            withAsterisk
            {...form.getInputProps('AssetId')}
            // rightSection={<Loader size="xs" />}
            
            // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
          
          />
              <TextInput
            
            label="Pet Name/Nombre"
            placeholder="Meow"
            mt="md"
            withAsterisk
            {...form.getInputProps('AssetId')}
            // rightSection={<Loader size="xs" />}
            
            // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
          
          />
                <Select 
            label="Pet Type/Dog"
            placeholder="Pitbull"
            value={assetId}
            onChange={()=>setAssetId}
            data = {assets}
            //{[{value:'testData'}]}
            //assets.length>=0 ? assets : [{value:'testData'}]   
            
          />
          <TextInput
            
            label="Breed"
            placeholder="German Sheperd"
            mt="md"
            withAsterisk
            {...form.getInputProps('AssetId')}
            // rightSection={<Loader size="xs" />}
            
            // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
          
          />
            <TextInput
            
            label="Email"
            placeholder="AssetId"
            mt="md"
            withAsterisk
            {...form.getInputProps('AssetId')}
            // rightSection={<Loader size="xs" />}
            
            // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
          
          />
            <TextInput
            
            label="Contact Number/Numero De Telefono"
            placeholder="AssetId"
            mt="md"
            withAsterisk
            {...form.getInputProps('AssetId')}
            // rightSection={<Loader size="xs" />}
            
            // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
          
          />
          <Select 
            label="Reason For Visit/Rason De La Visita"
            placeholder="ca-01"
            value={assetId}
            onChange={()=>setAssetId}
            data = {assets}
            //{[{value:'testData'}]}
            //assets.length>=0 ? assets : [{value:'testData'}]   
            
          />
         
  
          <TextInput
            label="Appointment Date"
            placeholder="MM-DD-YYYY"
            withAsterisk
            {...form.getInputProps('AppointmentDate')}
          />
          <TextInput
            label="Appointment Time"
            placeholder="HH:mm"
            withAsterisk
            {...form.getInputProps('AppointmentTime')}
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

           <Textarea
            
            label="Special Instructions To Doctor"
            placeholder="My dog is sensitive to bright lights | My pet likes to be pet before touching it"
            mt="md"
            withAsterisk
            {...form.getInputProps('SpecialInstructions')}
            // rightSection={<Loader size="xs" />}
            
            // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
          
          />  
          <Button type="submit" mt="md">
            Submit
          </Button>

        </form>
       
      </Box>
    );
  
  }
  
  export default BookAppointment;