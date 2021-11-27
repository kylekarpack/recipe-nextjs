import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useIsCookingContext } from "lib/hooks/useIsCooking";

export const CookingState: FunctionComponent = () => {
  const { setIsCooking } = useIsCookingContext();

  return (
    <Box
      position="sticky"
      bottom="0"
      textAlign="center"
      py="2"
      bg={useColorModeValue("gray.100", "gray.900")}
      zIndex="999"
      boxShadow="sm">
      <Button px="8" rounded="full" colorScheme="blue" onClick={() => setIsCooking(false)}>
        Done Cooking
      </Button>
    </Box>
  );
};
