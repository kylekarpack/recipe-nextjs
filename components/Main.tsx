import { FunctionComponent } from "react";
import { useIsCookingContext } from "lib/hooks/useIsCooking";
import Nav from "./Nav";

const Main: FunctionComponent = ({ children}) => {
  const { isCooking } = useIsCookingContext();
  return (
    <>
      {!isCooking && <Nav />}
      {children}
		</>
  );
};

export default Main;