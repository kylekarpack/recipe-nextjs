import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { Recipe } from "utilities/types";

export const Instructions: FunctionComponent<Recipe> = (recipe) => {
  if (recipe.instructions) {
    return (
      <Box>
        <Heading as="h2" pb="4">
          Instructions
        </Heading>
        <OrderedList>
          {recipe.instructions.map((el, i) => {
            return (
              <ListItem key={i} pb="2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: el.content.replace(/^(\<p\>)?(\<strong\>)?[0-9]+\. (\<\/strong\>)?/, "")
                  }}
                ></div>
              </ListItem>
            );
          })}
        </OrderedList>
      </Box>
    );
  }
  return null;
};
