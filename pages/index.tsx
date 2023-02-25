import Head from "next/head";
import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import NavBar from "@/components/Navbar";
import Disconnected from "@/components/Disconnected";
import Connected from "@/components/Connected";

import styles from "@/styles/Home.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  const { connected } = useWallet();
  return (
    <>
      <Head>
        <title>Buildoors</title>
        <meta name="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Box
          w="full"
          h="calc(100vh)"
          bgImage={"url(/assets/home-background.svg)"}
          backgroundPosition="center"
        >
          <Stack w="full" h="calc(100vh)" justify="center">
            <NavBar />
            <Spacer />
            <Center>{connected ? <Connected /> : <Disconnected />}</Center>
            <Spacer />

            <Center>
              <Box marginBottom={4} color="white">
                <a
                  href="https://twitter.com/_buildspace"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  built with @_tranminhwang
                </a>
              </Box>
            </Center>
          </Stack>
        </Box>
      </main>
    </>
  );
};

export default Home;
