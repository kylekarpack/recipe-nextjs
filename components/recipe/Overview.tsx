import { Box, Heading } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { Recipe } from "lib/types";

/**
 * Display the overview for a recipe
 */
export const Overview: FunctionComponent<Recipe> = ({ overview }) => {
  if (overview) {
    return (
      <Box pb="4">
        <Heading as="h2">Overview</Heading>
        <Box pt="4" dangerouslySetInnerHTML={{ __html: overview }} />
      </Box>
    );
  }
  return null;
};
