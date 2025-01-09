import {
  Button,
  HStack,
  IconButton,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const handleClick = () => {
    toggleColorMode();
  };

  return (
    <HStack>
      <IconButton
        aria-label="Light/Dark mode"
        onClick={handleClick}
        fontSize="20px"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
