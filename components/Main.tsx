import { FunctionComponent } from "react";
import Nav from "./Nav";
import { useCookingStateContext } from "@/lib/hooks/useCookingState";

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
