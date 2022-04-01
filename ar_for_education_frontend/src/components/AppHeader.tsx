import { FC } from "react";

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
          <Button
            variant="contained"
            onClick={async () => console.log(await store.toDataURL())}
          >
            {id ? "Update" : "Save new image"}
          </Button>
        </StyledToolbar>
      </Container>
    </AppBarWrapper>
  );
};

export default AppHeader;
