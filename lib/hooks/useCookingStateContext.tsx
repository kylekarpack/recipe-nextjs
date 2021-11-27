import { createContext, FunctionComponent, useContext, useMemo, useState } from "react";

type CookingState = {
  isCooking: boolean;
  currentStep: number;
  setIsCooking: (isCooking: boolean) => void;
  setCurrentStep: (stepNumber: number) => void;
  reset: () => void;
};

const CookingStateContext = createContext<CookingState>(null);

export const useCookingStateContext = () => {
  const context = useContext(CookingStateContext);
  if (!context) {
    throw new Error("useCookingStateContext must be used within a CookingStateContext provider");
  }
  return context;
};

const defaultState: Pick<CookingState, "isCooking" | "currentStep"> = {
  isCooking: false,
  currentStep: 0
};

const CookingStateContextProvider: FunctionComponent = ({ children }) => {
  const [state, setState] = useState(defaultState);
  const cookingState = useMemo<CookingState>(
    () => ({
      ...state,
      setIsCooking: (isCooking: boolean) => setState({ ...state, isCooking }),
      setCurrentStep: (currentStep: number) => setState({ ...state, currentStep }),
      reset: () =>
        setState({
          ...defaultState,
          isCooking: false,
          currentStep: 0
        })
    }),
    [state]
  );

  return <CookingStateContext.Provider value={cookingState}>{children}</CookingStateContext.Provider>;
};

export default CookingStateContextProvider;
