import { SiAmazongames } from "react-icons/si";
import { BiSearch } from "react-icons/bi";
import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

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
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Nav;
