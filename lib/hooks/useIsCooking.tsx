import { createContext, FunctionComponent, useContext, useMemo, useState } from "react";

type CookingContext = {
  isCooking?: boolean;
  setIsCooking?: (isCooking: boolean) => void;
};

const IsCookingContext = createContext<CookingContext>({});

export const useIsCookingContext = () => useContext(IsCookingContext);

const CookingContextProvider: FunctionComponent = ({ children }) => {
  const [isCooking, setIsCooking] = useState(false);
  const cooking = useMemo(() => ({ isCooking, setIsCooking }), [isCooking]);

  return <IsCookingContext.Provider value={cooking}>{children}</IsCookingContext.Provider>;
};

export default CookingContextProvider;
