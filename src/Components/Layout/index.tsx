import { Outlet } from "react-router-dom";
import { Box } from "../Box";
import React from "react";
const Layout: React.FC = () => (
  <Box pb="50px">
    <Outlet />
  </Box>
);
export default Layout;
