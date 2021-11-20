import React, { FunctionComponent } from "react";
import { Recipe } from "utilities/types";
import { Box, Image, Badge } from "@chakra-ui/react";
import Img from "next/image";

const makeNonProtocolRelative = (url: string): string => {
  if (!url) {
    return "";
  }
  if (url.startsWith("//")) {
    return `https:${url}`;
  }
  return url;
};

const RecipeCard: FunctionComponent<Recipe> = (recipe) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Img
        layout="responsive"
        height={100}
        width="100%"
        src={makeNonProtocolRelative(recipe.photo?.imageUrl)}
        alt={recipe.photo?.alt}
      />

      <Box p="6">
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {recipe.title}
        </Box>

        <Box as="p" color="gray.600" fontSize="sm" dangerouslySetInnerHTML={{ __html: recipe.description }}></Box>
      </Box>
    </Box>
  );
};

export default RecipeCard;
