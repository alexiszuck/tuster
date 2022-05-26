import Head from "next/head";
import { Stack, Button, Box } from "@mantine/core";
import Testimonials from "../components/Testimonials/Testimonials";

export default function Home() {
  return (
    <Stack>
      <Head>
        <title>tuster</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main>
        <Stack>
          <Box sx={(theme) => ({ backgroundColor: theme.colors.red[5] })}>
            <h1>Heading</h1>
            <Button>a button</Button>
          </Box>
          <Box sx={(theme) => ({ backgroundColor: theme.colors.blue[5] })}>
            Features
          </Box>
          <Testimonials />
        </Stack>
      </main>
      <footer>
        <Box sx={(theme) => ({ backgroundColor: theme.colors.yellow[5] })}>
          footer
        </Box>
      </footer> */}
    </Stack>
  );
}
