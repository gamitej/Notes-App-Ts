import { Box, Button, InputBase, styled } from "@mui/material";
import React from "react";

const Container = styled(Box)`
  & > * {
    margin: 20px 20px 0px 0px;
  }
  & > div > input[type="text"] {
    border-bottom: 1px solid #111111;
    width: 300px;
    padding-right: 15px;
  }
  & > div > input[type="color"] {
    width: 40px;
    height: 30px;
    position: relative;
    bottom: -10px;
  }
  & > span {
    position: relative;
    right: 60px;
    font-size: 12px;
  }
`;

const CreateNote: React.FC = () => {
  return (
    <Container>
      <InputBase placeholder="Enter " />
      <Box component="span">30</Box>
      <InputBase placeholder="Enter " />
      <Box component="span">50</Box>
      <InputBase type="color" defaultValue={"#F5F5F5"} />
      <Button variant="outlined">CREATE</Button>
    </Container>
  );
};

export default CreateNote;
