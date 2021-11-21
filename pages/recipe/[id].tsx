import { QueryResult, useQuery } from "@apollo/client";
import { Spinner } from "@chakra-ui/react";
import ErrorMessage from "components/ErrorMessage";
import { HeroImage, Instructions, Overview } from "components/Recipe";
import { useRouter } from "next/router";
import React from "react";
import { GET_RECIPE } from "utilities/queries";
import { RecipeResults } from "utilities/types";

const RecipePage = () => {
  const router = useRouter();

  const { data, error, loading }: QueryResult<RecipeResults> = useQuery(GET_RECIPE, {
    variables: { id: String(router.query.id) }
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }

  const recipe = data.search.hits[0]._source;

  return (
    <>
      <HeroImage {...recipe} />
      <Overview {...recipe} />
			<Instructions {...recipe} />
    </>
  );
};

export default RecipePage;
