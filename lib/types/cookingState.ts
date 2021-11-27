type CookingStateModifiers = {
  setIsCooking: (isCooking: boolean) => void;
  setCurrentStep: (stepNumber: number) => void;
  reset: () => void;
};

export type CookingStateValues = {
  isCooking: boolean;
  currentStep: number;
};

export type CookingState = CookingStateValues & CookingStateModifiers;
