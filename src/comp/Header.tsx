import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <div>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography>Header</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
