import Workspace from "polotno/canvas/workspace";
import { createStore } from "polotno/model/store";
import styled from "styled-components";

const store = createStore();
const page = store.addPage();

page.addElement({
  x: 50,
  y: 50,
  type: "text",
  fill: "black",
  text: "hello",
});

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 64px);
`;

const PolotnoContainer = () => {
  return (
    <Wrapper>
      <Workspace store={store} />
    </Wrapper>
  );
};

export default PolotnoContainer;
