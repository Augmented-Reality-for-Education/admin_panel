import { Button, CardActions, Card, CardContent } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";
import KonvaMain from "./KonvaMain";

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const CardStyles = styled(Card)`
  background-color: #001e3c;
`;

const KonvaContainer: FC<any> = () => {
  return (
    <CardWrapper>
      <CardStyles sx={{ maxWidth: 1000 }}>
        <CardContent>
          <KonvaMain />
        </CardContent>
        <CardActions>
          <Button>Save</Button>
        </CardActions>
      </CardStyles>
    </CardWrapper>
  );
};

export default KonvaContainer;
