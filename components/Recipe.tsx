import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";
import Img from "next/image";
import Head from "next/head";
import { FunctionComponent } from "react";
import { Recipe } from "utilities/types";

export const HeroImage: FunctionComponent<Recipe> = (recipe) => {
  if (recipe?.photo) {
    return (
      <Box position="relative" height="30vh">
        <Heading as="h1" zIndex={99} position="relative" top="30%" color="white" padding="0 5vw" >
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
      <Box py="4">
        <Heading as="h2">Instructions</Heading>
        <OrderedList py="4">
          {recipe.instructions.map((el, i) => {
            return (
              <ListItem key={i}>
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
