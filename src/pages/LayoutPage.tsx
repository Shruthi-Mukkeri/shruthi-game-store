import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { Box } from "@chakra-ui/react";

const LayoutPage = () => {
  return (
    <Box>
      <Nav />
      <Outlet />
    </Box>
  );
};

export default LayoutPage;
