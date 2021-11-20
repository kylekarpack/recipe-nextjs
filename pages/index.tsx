import WidgetDisplay from "components/WidgetDisplay";
import Head from "next/head";
import { FunctionComponent } from "react";

const Index: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>NextJS Starter</title>
      </Head>

      <main className="container">
        <h1>Welcome to NextJS Starter GraphQL!</h1>

        <div>
          Here are your widgets:
          <WidgetDisplay />
        </div>
      </main>
    </>
  );
};

export default Index;
