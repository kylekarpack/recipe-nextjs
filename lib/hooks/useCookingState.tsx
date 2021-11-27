import { createContext, FunctionComponent, useContext, useMemo, useState } from "react";

type CookingState = {
  isCooking: boolean;
  currentStep: number;
  setIsCooking?: (isCooking: boolean) => void;
  setCurrentStep?: (stepNumber: number) => void;
};

const CookingStateContext = createContext<CookingState>({
  isCooking: false,
  currentStep: 0
});

export const useCookingStateContext = () => useContext(CookingStateContext);

const CookingStateContextProvider: FunctionComponent = ({ children }) => {
  const [isCooking, setIsCooking] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const cookingState = useMemo(
    () => ({ currentStep, isCooking, setIsCooking, setCurrentStep }),
    [isCooking, currentStep]
  );

  return <CookingStateContext.Provider value={cookingState}>{children}</CookingStateContext.Provider>;
};

export default CookingStateContextProvider;
