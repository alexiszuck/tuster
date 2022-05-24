import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";
const themeOptions = {
  colorScheme: "light",
  fontFamily: "Roboto",
};
export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={themeOptions}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
