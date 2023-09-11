import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";

interface Props {
  onSearch: (searchValue: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const searchValue = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchValue.current) onSearch(searchValue.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <BiSearch size={22} />
          </InputLeftElement>
          <Input
            id="searchValue"
            name="searchValue"
            borderRadius={20}
            ref={searchValue}
            variant="filled"
            placeholder="Search games..."
          ></Input>
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
