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
import SearchInput from "./SearchInput";

const Nav = () => {
  return (
    <HStack>
      <Box px={5}>
        <SiAmazongames size={80}></SiAmazongames>
      </Box>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Nav;
