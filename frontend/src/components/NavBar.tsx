import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/DALL·E Logo 2024-09-26.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Box minWidth="60px">
        <Image
          src={logo}
          boxSize="60px"
          borderRadius="10px"
          objectFit="contain"
        />
      </Box>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
