import { QueryResult, useQuery } from "@apollo/client";
import React, { FunctionComponent } from "react";
import { GET_RANDOM_RECIPES } from "utilities/queries";
import { RecipeResults } from "utilities/types";

const seed = new Date().getTime();

const HomePage: FunctionComponent = () => {
	const { loading, error, data }: QueryResult<RecipeResults> = useQuery(GET_RANDOM_RECIPES, {
		variables: { seed: seed, limit: 12 },
	});

	if (loading) {
		return <div className="section content">
			Loading...
		</div>;
	}

	if (error) {
		return <>Error!</>;
	}

	const recipes = data?.search?.hits?.map((el) => el._source) || [];

	return (
		<div className="section content">
			<h1 className="is-size-3">Recipes</h1>
			{JSON.stringify(recipes)}
		</div>
	);
}

export default HomePage;