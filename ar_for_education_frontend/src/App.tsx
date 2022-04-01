import React from "react";
import { RecoilRoot } from "recoil";
import { createGlobalStyle } from "styled-components";

import AppHeader from "./components/AppHeader";
import PolotnoWrapper from "./components/PolotnoWrapper";
import PolotnoStoreProvider from "./providers/PolotnoStoreProvider";

// Move this to a separate file?
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    // background-color: #0A1929;
  }
`;

function App() {
  return (
    <RecoilRoot>
      <PolotnoStoreProvider>
        <GlobalStyle />
        <AppHeader />
        <PolotnoWrapper />
      </PolotnoStoreProvider>
    </RecoilRoot>
  );
}

export default App;
