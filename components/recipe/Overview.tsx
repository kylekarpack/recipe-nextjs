import { Box, Heading } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { Recipe } from "utilities/types";

export const Overview: FunctionComponent<Recipe> = (recipe) => {
  if (recipe.overview) {
    return (
      <Box pb="4">
        <Heading as="h2">Overview</Heading>
        <Box pt="4" dangerouslySetInnerHTML={{ __html: recipe.overview }}></Box>
      </Box>
    );
  }
  return null;
};
