import Head from "next/head";
import { FunctionComponent, useEffect, useState } from "react";
import { getMealPlan } from "lib/data/db";

/**
 * Meal plan page
 */
const Plan: FunctionComponent = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(getMealPlan());
  }, []);
  return (
    <>
      <Head>
        <title>Meal Plan</title>
      </Head>
      {JSON.stringify(recipes, null, 4)}
    </>
  );
};

export default Plan;
