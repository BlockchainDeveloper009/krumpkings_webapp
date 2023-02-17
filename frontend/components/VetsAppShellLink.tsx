import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  ScrollArea,
  Button,
  SimpleGrid,
  Title,
  Anchor,
  ActionIcon,
  Flex,
  Box,
} from '@mantine/core';
//import TableExample from './ManageWillsTable';
//import ChipsExample from './ChipsExample';

// import { 
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Routes 
// } from "react-router-dom";
import Link from "next/link";
import ChipsExample from './ChipsExample';
// import ApplicationContainer from '../pages/ApplicationContainer';
import { useRouter } from 'next/navigation';
import GeneralFooter from './GeneralFooter';
import { DoubleHeaderColored } from './HeaderRibbon';
import Cards from './Cards';
import AdSellerCarousel from './AdSellerCarousel';
import { useAccount } from 'wagmi';

import { ConnectButton, getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';  
import {
 
  legendsOfKrump_CONTRACT_ADDRESS,
  CreateBondandAdminRole_CONTRACT_ABI,
} from "../srcConstants";
// import Cards from './Cards';

// import { InjectedConnector } from 'wagmi/connectors/injected'
// import { useAccount, useConnect, useDisconnect } from 'wagmi';
// import WagmiWillsFormEdit from './WillsFormEdit';
// import WillsFormEdit from './WillsFormEdit';


const OrganizationName = "Krump Kings"
const Applicationfooter = `2022 all copyright resverved to ${OrganizationName}`
function mint(){}
function AppShellLinkExample() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  const { isConnected } = useAccount();
  return (
    
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg:175  }}>
          <Title order={3} align="center">Krump NFT's</Title>
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {/* scrollable content here */}
            <div style={{display: "flex", flexDirection: "column", padding:15 }}>
           
                   <Link href="/LegendsOfKrump"  style={{padding:5 }} >
                      Legends of Krump
                    </Link>
                   
            
                    <Link href="/PremiumCollections"  style={{padding:5 }} >
                    Premium Collections
                    </Link>
                    <Link href="/KrumpMovies"  style={{padding:5 }} >
                    Krump Movies 
                    </Link>
                    <Link href="/Krumptionary"  style={{padding:5 }} >
                   Krumptionary
                    </Link>

                    <Link href="/RealityTv"  style={{padding:5 }} >
                   Reality Tv
                    </Link>
                </div>    
                    
                <div style={{display: "flex", flexDirection: "column", padding:15 }}>
               
                    <Link href="/MyCollections" style={{padding:5 }} >
                    My Collections
                    </Link>
              
    
                
                     <Link href="/ViewAllCollections">
                      View All Collection
                    </Link>
                    
              </div>

          </Navbar.Section>
        </Navbar>
      }
     
      footer={
        <Footer height={60} p="md">
          <Text>Contact</Text>
          <Text>Location</Text>
          <Text>Hours & Info</Text>
          <GeneralFooter/>
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', justifyContent:"space-around", alignItems: 'stretch', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

           
          
            <SimpleGrid cols={7} sx={{ color: 'red', fontSize: 18, lineHeight: 1.4, padding:5 }}>
            
          <div><Text><Link href="/" >{OrganizationName}</Link></Text></div>
          <div><Text><Link href="/AboutUs">AboutUs</Link></Text></div>
          <div><Text><Link href="/Team">Our Team</Link></Text></div>
          <div><Text><Link href="/ContactUs">ContactUs</Link></Text></div>

         
          

         
          {/* {isConnected && (
            <button style={{marginTop:24}}
            className="button"
            onClick={()=> mint()}>testMintS</button>
          )} */}


        </SimpleGrid>
        <div><Box ><ConnectButton/></Box></div>
        </div>
        </Header>

        
      }
      // header = {DoubleHeaderColored()}
    
    padding ={15}>
      {/* <Box>
      <Flex> <Cards></Cards></Flex>
      </Box> */}
    
    <AdSellerCarousel/>
    </AppShell>
   
    
  );
  
}

export default AppShellLinkExample;
