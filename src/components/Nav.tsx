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
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <HStack>
      <Box>
        <Link to="/">
          <SiAmazongames size={80}></SiAmazongames>
        </Link>
      </Box>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Nav;
