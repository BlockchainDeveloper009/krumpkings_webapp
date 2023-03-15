import Head from 'next/head'

import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { AspectRatio, Box, Container, Image, Spoiler, Title } from '@mantine/core';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Krump Kings NFT marketplace</title>
        <meta name="description" content="NFT marketplace built for dancers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
    
      {/* <AspectRatio ratio={900 / 1600} sx={{ maxWidth: 300 }} mx="auto">
        Main App from App.ysx
        <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
        <Image
        width={900}
        height={1600}
        fit="contain"
        src="../images/Set-185-(The-Golden-Series)-44h.jpg"
        alt="Legends of Krump"
      />
      
      </div>
      </AspectRatio> */}
      <Box
  sx={(theme) => ({
    color:'yellow', fontSize: 18,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    textAlign: 'center',
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    
    cursor: 'pointer',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },
  })}
>
<Image
                        src="../images/Set-185-(The-Golden-Series)-44h.jpg"
                        height={600}
                        fit="contain"
                        alt="Norway"
                        />
<Title order={1}> Krump Kings NFTMarketplace</Title>
        <p>
        An marketplace built for Dancers & Dance communities.
        </p>
</Box>
     

      </main>
    </>
  )
}
