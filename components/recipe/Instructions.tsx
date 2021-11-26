import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { removeStepNumber } from "utilities/functions";
import { Recipe } from "utilities/types";

export const Instructions: FunctionComponent<Recipe> = (recipe) => {
  if (recipe.instructions) {
    return (
      <Box data-testid="instructions">
        <Heading as="h2" pb="4">
          Instructions
        </Heading>
        <OrderedList data-testid="instructionsList">
          {recipe.instructions.map((el, i) => {
            return (
              <ListItem key={i} pb="2" data-testid="instruction">
                <div
                  dangerouslySetInnerHTML={{
                    __html: removeStepNumber(el.content)
                  }}></div>
              </ListItem>
            );
          })}
        </OrderedList>
      </Box>
    );
  }
  return null;
};
