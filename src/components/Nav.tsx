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

interface Props {
  onSearch: (searchValue: string) => void;
}

const Nav = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Box px={5}>
        <SiAmazongames size={80}></SiAmazongames>
      </Box>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Nav;
