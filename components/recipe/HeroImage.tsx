import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
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