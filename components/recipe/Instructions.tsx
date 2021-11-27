import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { removeStepNumber } from "lib/functions";
import { Recipe } from "lib/types";

export const Instructions: FunctionComponent<Recipe> = ({ instructions }) => {
  if (instructions) {
    return (
      <Box data-testid="instructions">
        <Heading as="h2" pb="4">
          Instructions
        </Heading>
        <OrderedList data-testid="instructionsList">
          {instructions.map((el) => (
            <ListItem key={el.content} pb="2" data-testid="instruction">
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
