import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platform: Platform[];
}
const PlatformIconList = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playStation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack>
      {platform.map((platform) => (
        <Icon
          color="gray.500"
          key={platform.id}
          my={1}
          as={iconMap[platform.slug]}
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
