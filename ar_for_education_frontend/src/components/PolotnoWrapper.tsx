// import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";

import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";
import styled from "styled-components";
import usePolotnoStore from "../hooks/usePolotnoStore";

const polotno = require("polotno");
const { PolotnoContainer, SidePanelWrap, WorkspaceWrap } = polotno;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 64px);

  // Hide side panel buttons we are not using
  & .polotno-side-panel-tab:first-of-type,
  & .polotno-side-panel-tab:last-of-type,
  & .polotno-side-panel-tab:nth-of-type(3),
  & .polotno-side-panel-tab:nth-of-type(6) {
    display: none;
  }

  // Hide page buttons
  & div.polotno-workspace-container > div > div > div:nth-child(2) {
    display: none;
  }
`;

export const PolotnoWrapper = () => {
  const { store } = usePolotnoStore();

  return (
    <Wrapper>
      <PolotnoContainer>
        <SidePanelWrap>
          <SidePanel store={store} defaultSection={"text"} />
        </SidePanelWrap>
        <WorkspaceWrap>
          <Toolbar store={store} />
          <Workspace store={store} />
          <ZoomButtons store={store} />
        </WorkspaceWrap>
      </PolotnoContainer>
    </Wrapper>
  );
};
export default PolotnoWrapper;
