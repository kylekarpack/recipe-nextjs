import { Box, Button, Heading, Stack, Text, DarkMode } from "@chakra-ui/react";
import Img from "next/image";
import { FunctionComponent } from "react";
import { makeNonProtocolRelative } from "utilities/functions";
import { Recipe } from "utilities/types";

export const HeroImage: FunctionComponent<Recipe> = ({ photo, title, description }) => {
  if (photo) {
    return (
      <Box position="relative" height="40vh" data-testid="hero">
        <Box zIndex={99} position="relative" top={{ base: 6, sm: 12, md: 20 }} px="12">
          <Heading
            as="h1"
            color="white"
            noOfLines={2}
            pb="2"
            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
            data-testid="title">
            {title}
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color="gray.300"
            noOfLines={2}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Stack direction={{ base: "column", sm: "row" }} spacing={4} pt="4">
            <Button px="8" rounded="full" colorScheme="blue">
              Add to Meal Plan
            </Button>
            <DarkMode>
              <Button px="8" borderColor="grey.50" variant="outline" rounded="full">
                Start Cooking
              </Button>
            </DarkMode>
          </Stack>
        </Box>

        <Box position="absolute" left={0} right={0} top={0} bottom={0} background="black">
          <Box opacity={0.4}>
            <Img
              priority
              layout="fill"
              objectFit="cover"
              src={makeNonProtocolRelative(photo.heroImageUrl)}
              alt={photo.alt}
              data-testid="heroImage"
            />
          </Box>
        </Box>
      </Box>
    );
  }

  return null;
};
