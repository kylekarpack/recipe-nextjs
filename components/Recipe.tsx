import { Box, Button, Heading, ListItem, OrderedList, Stack, Text, UnorderedList } from "@chakra-ui/react";
import Img from "next/image";
import React, { FunctionComponent } from "react";
import { Recipe } from "utilities/types";

export const HeroImage: FunctionComponent<Recipe> = (recipe) => {
  if (recipe?.photo) {
    return (
      <Box position="relative" height="40vh">
        <Box zIndex={99} position="relative" top={{ base: 6, sm: 12, md: 20 }} px="12">
          <Heading as="h1" color="white" noOfLines={2} pb="2" fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
            {recipe.title}
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.300"}
						noOfLines={2}
            dangerouslySetInnerHTML={{ __html: recipe.description }}
          />
          <Stack direction={{ base: "column", sm: "row" }} spacing={4} pt="4">
            <Button
							px="8"
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500"
              }}
            >
              Add to Meal Plan
            </Button>
            <Button px="8" rounded={"full"}>Start Cooking</Button>
          </Stack>
        </Box>

        <Box position="absolute" left={0} right={0} top={0} bottom={0} background="black">
          <Box opacity={0.4}>
            <Img
              priority
              layout="fill"
              objectFit="cover"
              src={`https:${recipe.photo.heroImageUrl}`}
              alt={recipe.photo.alt}
            />
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
      <Box pb="4">
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

export const Ingredients: FunctionComponent<Recipe> = (recipe) => {
  if (recipe.recipeIngredientGroups) {
    return (
      <>
        <Heading as="h2" pb="4">
          Ingredients
        </Heading>
        {recipe.recipeIngredientGroups.map((group, i) => (
          <Box key={i}>
            {group.name && (
              <Box>
                <strong>{group.name}</strong>
              </Box>
            )}
            <UnorderedList py="2">
              {group.recipeIngredients.map((ingredient, i) => (
                <ListItem key={i} pb="2" lineHeight="1.2">
                  {ingredient.quantity} <span>{ingredient.measurement}</span> {ingredient.ingredient.name}
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
