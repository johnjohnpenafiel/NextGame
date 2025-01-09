import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/NextgameLogo.svg";
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
          boxSize="40px"
          borderRadius="8px"
          objectFit="contain"
          m="10px"
        />
      </Box>
      <Heading as="h6" size="md" mr="10px">
        NEXTGAME
      </Heading>

      <SearchInput onSearch={onSearch} />
      <Box m="10px">
        <ColorModeSwitch />
      </Box>
    </HStack>
  );
};

export default NavBar;
