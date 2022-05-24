import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";
const themeOptions = {
  colorScheme: "light",
  fontFamily: "Roboto",
};
export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={themeOptions}>
        <Navbar />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
