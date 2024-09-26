import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/DALL·E Logo 2024-09-26.webp";

const NavBar = () => {
  return (
    <HStack>
      <div style={{ padding: "5px" }}>
        <Image src={logo} boxSize="60px" borderRadius="10px" />
      </div>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
