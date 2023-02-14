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
} from '@mantine/core';
//import TableExample from './ManageWillsTable';
//import ChipsExample from './ChipsExample';

import { 
    BrowserRouter as Router,
    Link,
    Route,
    Routes 
} from "react-router-dom";
import ChipsExample from './ChipsExample';
import ApplicationContainer from '../pages/ApplicationContainer';

// import Cards from './Cards';

// import { InjectedConnector } from 'wagmi/connectors/injected'
// import { useAccount, useConnect, useDisconnect } from 'wagmi';
// import WagmiWillsFormEdit from './WillsFormEdit';
// import WillsFormEdit from './WillsFormEdit';

const Applicationfooter = "2022 all copyright resverved to Inherit Blocks"
function AppShellExample() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <Router>
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>Application navbar</Text>
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {/* scrollable content here */}
            <div style={{display: "flex", flexDirection: "column"}}>
                    <Text component={Link}  variant="link" to="/">
                      Home Page
                    </Text>
                    <Text component={Link}  variant="link" to="/ApplicationContainerPage">
                      ApplicationContainer
                    </Text>
                    
              </div>

          </Navbar.Section>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
      }
    >
   
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
    </Router>
    
  );
  
}

export default AppShellExample;
