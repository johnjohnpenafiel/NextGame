import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/DALL·E Logo 2024-09-26.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <div style={{ padding: "5px" }}>
        <Image src={logo} boxSize="60px" borderRadius="10px" />
      </div>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
