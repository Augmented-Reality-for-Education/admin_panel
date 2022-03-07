import { FC } from "react";

import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const AppBarWrapper = styled(AppBar)`
  background-color: #001d3d;
`;

const AppHeader: FC<any> = () => {
  return (
    <AppBarWrapper position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div">
            AR for Education
          </Typography>
        </Toolbar>
      </Container>
    </AppBarWrapper>
  );
};

export default AppHeader;
