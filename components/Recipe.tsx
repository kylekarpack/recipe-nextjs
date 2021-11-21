import { Box, Heading, ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import Img from "next/image";
import React, { FunctionComponent } from "react";
import { Recipe } from "utilities/types";

export const HeroImage: FunctionComponent<Recipe> = (recipe) => {
  if (recipe?.photo) {
    return (
      <Box position="relative" height="40vh">
        <Heading as="h1" zIndex={99} position="relative" top="35%" color="white" padding="0 5vw">
          {recipe.title}
        </Heading>
        <Box position="absolute" left={0} right={0} top={0} bottom={0} background="black">
          <Box opacity={0.4}>
            <Img layout="fill" objectFit="cover" src={`https:${recipe.photo.heroImageUrl}`} alt={recipe.photo.alt} />
          </Box>
        </Box>
      </Box>
    );
  }
  return null;
};

export const Overview: FunctionComponent<Recipe> = (recipe) => {
  if (recipe.overview) {
    return (
      <Box py="4">
        <Heading as="h2">Overview</Heading>
        <Box pt="4" dangerouslySetInnerHTML={{ __html: recipe.overview }}></Box>
      </Box>
    );
  }
  return null;
};

export const Instructions: FunctionComponent<Recipe> = (recipe) => {
  if (recipe.instructions) {
    return (
      <Box>
        <Heading as="h2" pb="4">Instructions</Heading>
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

export const Ingredients: FunctionComponent<Recipe> = (recipe) => {
  if (recipe.recipeIngredientGroups) {
    return (
      <>
        <Heading as="h2" pb="4">Ingredients</Heading>
        {recipe.recipeIngredientGroups.map((group) => (
          <Box key={group.id}>
            {group.name && (
              <Box>
                <strong>{group.name}</strong>
              </Box>
            )}
            <UnorderedList py="2">
              {group.recipeIngredients.map((el) => (
                <ListItem key={el.id} pb="2" lineHeight="1.2">
                  {el.quantity} <span>{el.measurement}</span> {el.ingredient.name}
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        ))}
      </>
    );
  }
  return null;
};
