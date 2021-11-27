import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { removeStepNumber } from "lib/functions";
import { useCookingStateContext } from "lib/hooks/useCookingState";
import { Recipe } from "lib/types";

export const Instructions: FunctionComponent<Recipe> = ({ instructions }) => {
  const { currentStep } = useCookingStateContext();
  if (instructions) {
    return (
      <Box data-testid="instructions">
        <Heading as="h2" pb="4">
          Instructions
        </Heading>
        <OrderedList data-testid="instructionsList">
          {instructions.map((el, i) => (
            <ListItem key={el.content} pb="2" opacity={currentStep > i ? 0.5 : 1} data-testid="instruction">
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
