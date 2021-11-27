import { FunctionComponent } from "react";
import { useCookingStateContext } from "lib/hooks";
import Nav from "./Nav";

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
