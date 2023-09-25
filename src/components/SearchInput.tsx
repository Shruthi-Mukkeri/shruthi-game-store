import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const searchValue = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchValue.current) {
            setSearchText(searchValue.current.value);
            navigate("/");
          }
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
