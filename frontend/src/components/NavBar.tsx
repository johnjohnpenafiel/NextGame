import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/DALL·E Logo 2024-09-26.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <div style={{ padding: "5px" }}>
        <Image src={logo} boxSize="60px" borderRadius="10px" />
      </div>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
