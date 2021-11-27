import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, useColorModeValue, Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useCookingStateContext } from "lib/hooks";
import { Recipe } from "lib/types";

export const CookingState: FunctionComponent<Recipe> = ({ instructions }) => {
  const { reset, currentStep, setCurrentStep } = useCookingStateContext();

  return (
    <Box textAlign="center" py="2" px="4" bg={useColorModeValue("gray.100", "gray.900")} zIndex="999" boxShadow="sm">
      <Flex justifyContent="space-between">
        <Box flex="1">&nbsp;</Box>
        <Box>
          <Button disabled={currentStep <= 0} onClick={() => setCurrentStep(currentStep - 1)}>
            <ArrowBackIcon />
          </Button>
          <Box px="4" display="inline-block">
            Step {currentStep + 1} / {instructions?.length}
          </Box>
          <Button disabled={currentStep >= instructions.length - 1} onClick={() => setCurrentStep(currentStep + 1)}>
            <ArrowForwardIcon />
          </Button>
        </Box>
        <Box flex="1" textAlign="right">
          <Button px="8" rounded="full" colorScheme="blue" onClick={() => reset()}>
            Done Cooking
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
