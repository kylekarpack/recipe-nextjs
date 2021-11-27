import { Box } from "@chakra-ui/react";
import Img from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { makeNonProtocolRelative } from "lib/functions";
import { Recipe } from "lib/types";

/**
 * Display a recipe card with a photo, title, and description
 */
const RecipeCard: FunctionComponent<Recipe> = ({ id, photo, title, description }) => (
  <Link href={`/recipe/${id}`} passHref>
    <a href={`/recipe/${id}`}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        {photo && (
          <Img
            layout="responsive"
            height={100}
            width="100%"
            src={makeNonProtocolRelative(photo?.imageUrl)}
            alt={photo?.alt}
          />
        )}

        <Box p="6">
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {title}
          </Box>

          <Box as="p" color="gray.600" fontSize="sm" dangerouslySetInnerHTML={{ __html: description }} />
        </Box>
      </Box>
    </a>
  </Link>
);

export default RecipeCard;
