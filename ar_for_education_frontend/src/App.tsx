import React from "react";
import { RecoilRoot } from "recoil";
import { createGlobalStyle } from "styled-components";

import AppHeader from "./components/AppHeader";
import PolotnoWrapper from "./components/PolotnoWrapper";

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
      <GlobalStyle />
      <AppHeader />
      <PolotnoWrapper />
    </RecoilRoot>
  );
}

export default App;
