import { useQuery, QueryResult } from "@apollo/client";
import React, { FunctionComponent } from "react";
import { GET_RECIPES } from "utilities/queries";
import { RecipeSearchOutput } from "utilities/types";
import styles from "./WidgetDisplay.module.css";

const WidgetDisplay: FunctionComponent = () => {
  const { loading, error, data }: QueryResult<RecipeSearchOutput> = useQuery(GET_RECIPES);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className={styles.error} data-testid="error">
        {error.message}
      </div>
    );
  }

  return (
    <>{JSON.stringify(data)}</>
  );
};

export default WidgetDisplay;
