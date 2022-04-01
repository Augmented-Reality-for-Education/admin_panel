import { FC } from "react";

import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import usePolotnoStore from "../hooks/usePolotnoStore";

const AppBarWrapper = styled(AppBar)`
  background-color: #001d3d;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const AppHeader: FC<any> = () => {
  const { id, store } = usePolotnoStore();
  return (
    <AppBarWrapper position="static">
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          <Typography variant="h6" noWrap component="div">
            AR for Education
          </Typography>
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
