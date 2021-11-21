import { Box } from "@chakra-ui/react";
import Img from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { makeNonProtocolRelative } from "utilities/functions";
import { Recipe } from "utilities/types";

const RecipeCard: FunctionComponent<Recipe> = (recipe) => {
  return (
    <Link href={`/recipe/${recipe.id}`} passHref>
      <a>
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
      </a>
    </Link>
  );
};

export default RecipeCard;
