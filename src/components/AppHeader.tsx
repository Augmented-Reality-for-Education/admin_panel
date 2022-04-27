import React, { FC } from "react";
import {
  AppBar,
  Button,
  Container,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import usePolotnoStore from "../hooks/usePolotnoStore";
import { postUserDesign, postUserDesignSequence } from "../axios/service";
import { UserDesign, UserDesignSequence } from "../types";

const AppBarWrapper = styled(AppBar)`
  background-color: #001d3d;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const StyledTextField = styled(TextField)`
  & .MuiInputBase-input {
    color: white;
    text-align: center;
  }
`;

const AppHeader: FC<any> = () => {
  const { id, store, name, setName } = usePolotnoStore();
  const [buttonToggle, setButtonToggle] = React.useState(false);

  const postUserDesignHandler = async (name: string, dataURL: string) => {
    const userDesign: UserDesign = { name, dataURL };
    const response = await postUserDesign(userDesign);
    console.log(response);
  };

  let frames: UserDesign[] = [];

  const sequenceHandler = async (name: string) => {
    setButtonToggle(true);
  };

  const addFrameHandler = async (name: string, dataURL: string) => {
    const userDesign: UserDesign = { name, dataURL: dataURL };
    frames.push(userDesign);
  };

  const saveSequenceHandler = async () => {
    const userDesignList: UserDesignSequence = { data: frames };
    const response = await postUserDesignSequence(userDesignList);
    console.log(response);
  };

  return (
    <AppBarWrapper position="static">
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          <Typography variant="h6" noWrap component="div">
            AR for Education
          </Typography>
          <StyledTextField
            variant="standard"
            value={name}
            placeholder={"Untitled"}
            onChange={(e) => setName(e.target.value)}
          />
          {buttonToggle ? (
            <>
              <Button
                variant="contained"
                onClick={async () =>
                  addFrameHandler(
                    name || "Untitled sequence",
                    await store.toDataURL()
                  )
                }
              >
                Add frame
              </Button>
              <Button variant="contained" onClick={() => saveSequenceHandler()}>
                Save sequence
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                onClick={async () =>
                  postUserDesignHandler(
                    name || "Untitled design",
                    await store.toDataURL()
                  )
                }
              >
                {id ? "Update" : "Save new image"}
              </Button>
              <Button
                variant="contained"
                onClick={async () =>
                  sequenceHandler(name || "Untitled sequence")
                }
              >
                Create animated sequence
              </Button>
            </>
          )}
        </StyledToolbar>
      </Container>
    </AppBarWrapper>
  );
};

export default AppHeader;
