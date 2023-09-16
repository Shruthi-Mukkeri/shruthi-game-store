import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onselectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}
const PlatformSelector = ({ onselectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;

  const selectedPlatformName = data?.results.find(
    (platform) => platform.id === selectedPlatformId
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformName?.name || "PlatForms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform: Platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onselectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
