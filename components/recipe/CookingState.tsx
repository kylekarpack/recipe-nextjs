import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useCookingStateContext } from "@/lib/hooks/useCookingState";

export const CookingState: FunctionComponent = () => {
  const { setIsCooking } = useCookingStateContext();

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
