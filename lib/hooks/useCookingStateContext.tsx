import { FunctionComponent, createContext, useContext, useMemo, useState } from "react";
import { CookingState, CookingStateValues } from "lib/types";

const defaultState: CookingStateValues = {
  isCooking: false,
  currentStep: 0
};

const CookingStateContext = createContext<CookingState>(null);

/** Retrieve getters and setters for cooking state context */
export const useCookingStateContext = (): CookingState => {
  const context = useContext(CookingStateContext);
  if (!context) {
    throw new Error("useCookingStateContext must be used within a CookingStateContext provider");
  }
  return context;
};

/** Provide the cooking state context */
export const CookingStateContextProvider: FunctionComponent = ({ children }) => {
  const [state, setState] = useState(defaultState);
  const cookingState = useMemo<CookingState>(
    () => ({
      ...state,
      setIsCooking: (isCooking: boolean) => setState({ ...state, isCooking }),
      setCurrentStep: (currentStep: number) => setState({ ...state, currentStep }),
      reset: () => setState(defaultState)
    }),
    [state]
  );

  return <CookingStateContext.Provider value={cookingState}>{children}</CookingStateContext.Provider>;
};
