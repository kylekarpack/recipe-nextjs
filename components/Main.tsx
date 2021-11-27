import { FunctionComponent } from "react";
import { useCookingStateContext } from "lib/hooks";
import Nav from "./Nav";

/**
 * The main layout for the application
 */
const Main: FunctionComponent = ({ children }) => {
  const { isCooking } = useCookingStateContext();
  return (
    <>
      {!isCooking && <Nav />}
      {children}
    </>
  );
};

export default Main;
