// import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";

import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";
import { createStore } from "polotno/model/store";
import styled from "styled-components";

const polotno = require("polotno");
const { PolotnoContainer, SidePanelWrap, WorkspaceWrap } = polotno;

const store = createStore();
store.addPage();

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
`;

export const PolotnoWrapper = () => {
  return (
    <Wrapper>
      <PolotnoContainer>
        <SidePanelWrap>
          <SidePanel store={store} />
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
