import { createContext, FunctionComponent, useContext, useMemo, useState } from "react";

type CookingState = {
  isCooking: boolean;
  setIsCooking?: (isCooking: boolean) => void;
};

const CookingStateContext = createContext<CookingState>({
  isCooking: false
});

export const useCookingStateContext = () => useContext(CookingStateContext);

const CookingStateContextProvider: FunctionComponent = ({ children }) => {
  const [isCooking, setIsCooking] = useState(false);
  const cooking = useMemo(() => ({ isCooking, setIsCooking }), [isCooking]);

  return <CookingStateContext.Provider value={cooking}>{children}</CookingStateContext.Provider>;
};

export default CookingStateContextProvider;
