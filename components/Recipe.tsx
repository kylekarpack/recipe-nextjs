import Img from "next/image";
import { FunctionComponent } from "react";
import { Recipe } from "utilities/types";
import { Box, Heading } from "@chakra-ui/react";

export const HeroImage: FunctionComponent<Recipe> = (recipe) => {
  if (recipe?.photo) {
    return (
      <div>
        <Img
          width="100%"
          height="30vh"
          layout="responsive"
          src={`https:${recipe.photo.heroImageUrl}`}
          alt={recipe.photo.alt}
        />
      </div>
    );
  }
  return null;
};

export const Overview: FunctionComponent<Recipe> = (recipe) => {
  if (recipe.overview) {
    return (
      <Box>
        <Heading as="h2">Overview</Heading>
        <div dangerouslySetInnerHTML={{ __html: recipe.overview }}></div>
      </Box>
    );
  }
  return null;
};

export const Instructions: FunctionComponent<Recipe> = (recipe) => {
  if (recipe.instructions) {
    return (
      <Box>
        <Heading as="h2">Instructions</Heading>
        <ol style={{listStyle:"none"}}>
          {recipe.instructions.map((el, i) => {
            return (
              <li key={i}>
                <div dangerouslySetInnerHTML={{ __html: el.content }}></div>
              </li>
            );
          })}
        </ol>
      </Box>
    );
  }
  return null;
};
