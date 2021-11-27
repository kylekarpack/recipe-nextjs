import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { removeStepNumber } from "lib/functions";
import { useCookingStateContext } from "lib/hooks";
import { Recipe } from "lib/types";

/**
 * Display the step-by-step instructions for a recipe
 */
export const Instructions: FunctionComponent<Recipe> = ({ instructions }) => {
  const { currentStep, isCooking } = useCookingStateContext();
  if (instructions) {
    return (
      <Box data-testid="instructions">
        <Heading as="h2" pb="4">
          Instructions
        </Heading>
        <OrderedList start={currentStep + 1} data-testid="instructionsList">
          {instructions.map((el, i) => (
            <ListItem
              key={el.content}
              pb="2"
              display={currentStep > i ? "none" : "list-item"}
              opacity={!isCooking || currentStep === i ? 1 : 0.5}
              data-testid="instruction">
              <div
                dangerouslySetInnerHTML={{
                  __html: removeStepNumber(el.content)
                }}></div>
            </ListItem>
          ))}
        </OrderedList>
      </Box>
    );
  }
  return null;
};
