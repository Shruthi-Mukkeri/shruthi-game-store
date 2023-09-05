import { SiAmazongames } from "react-icons/si";
import { BiSearch } from "react-icons/bi";
import {
  Box,
  HStack,
  Switch,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
const Nav = () => {
  return (
    <HStack>
      <Box pl={3}>
        <SiAmazongames size={85}></SiAmazongames>
      </Box>
      <InputGroup borderRadius="lg">
        <InputLeftElement pointerEvents="none">
          <BiSearch size={22}></BiSearch>
        </InputLeftElement>
        <Input variant="filled" placeholder="Search games..."></Input>
      </InputGroup>

      <Switch size="md" />
      <Box whiteSpace={"nowrap"} pr={3}>
        Dark Mode
      </Box>
      {/* <BiSearch size={22}></BiSearch> */}
    </HStack>
  );
};

export default Nav;
