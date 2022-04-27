import React, { FC } from "react";
import {
  AppBar,
  Badge,
  Box,
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

const StyledButtonWrapper = styled(Button)`
  margin-right: 10px;
`;

const AppHeader: FC<any> = () => {
  const { id, store, name, setName } = usePolotnoStore();
  const [buttonToggle, setButtonToggle] = React.useState(false);
  const [frames, setFrames] = React.useState([] as UserDesign[]);

  const postUserDesignHandler = async (name: string, dataURL: string) => {
    const userDesign: UserDesign = { name, dataURL };
    const response = await postUserDesign(userDesign);
    console.log(response);
  };

  const sequenceHandler = async () => {
    setButtonToggle(true);
  };

  const addFrameHandler = async (name: string, dataURL: string) => {
    const userDesign: UserDesign = { name, dataURL: dataURL };
    setFrames([...frames, userDesign]);
  };

  const saveSequenceHandler = async (name: string) => {
    setButtonToggle(false);
    const userDesignList: UserDesignSequence = { name, data: frames };
    const response = await postUserDesignSequence(userDesignList);
    setFrames([]);
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
          <Box>
            {buttonToggle ? (
              <>
                <StyledButtonWrapper>
                  <Badge
                    badgeContent={frames ? frames.length : null}
                    color="secondary"
                  >
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
                  </Badge>
                </StyledButtonWrapper>
                <Button
                  variant="contained"
                  onClick={() =>
                    saveSequenceHandler(name || "Untitled sequence")
                  }
                >
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
                  onClick={async () => sequenceHandler()}
                >
                  Create animated sequence
                </Button>
              </>
            )}
          </Box>
        </StyledToolbar>
      </Container>
    </AppBarWrapper>
  );
};

export default AppHeader;
