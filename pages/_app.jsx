import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";
import { store } from "../context/store";
import { Provider } from "react-redux";
import SideNavbar from "../components/SideNavbar/SideNavbar";
const themeOptions = {
  colorScheme: "light",
  fontFamily: "Roboto",
};
export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={themeOptions}>
        <Navbar />
        <SideNavbar />
        <Component {...pageProps} />
      </MantineProvider>
    </Provider>
  );
}
