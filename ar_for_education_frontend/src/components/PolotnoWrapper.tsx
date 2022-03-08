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
`;

export const PolotnoWrapper = () => {
  return (
    <Wrapper>
      <PolotnoContainer>
        <SidePanelWrap>
          <SidePanel store={store} />
        </SidePanelWrap>
        <WorkspaceWrap>
          <Toolbar store={store} downloadButtonEnabled />
          <Workspace store={store} />
          <ZoomButtons store={store} />
        </WorkspaceWrap>
      </PolotnoContainer>
    </Wrapper>
  );
};
export default PolotnoWrapper;
