import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import type { NextPage } from "next";
import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import Disconnected from "../components/Disconnected";
import Connected from "../components/Connected";
import { useWallet } from "@solana/wallet-adapter-react";

const inter = Inter({ subsets: ["latin"] });
const Home: NextPage = () => {
  const { connected } = useWallet();
  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors</title>
        <meta name="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={"url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          {/* NavBar */}
          <NavBar />
          <Spacer />
          <Center>
            <Center>{connected ? <Connected /> : <Disconnected />}</Center>
          </Center>
          <Spacer />
          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/_buildspace"
                target="_blank"
                rel="noopener noreferrer"
              >
                built with @_buildspace
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
