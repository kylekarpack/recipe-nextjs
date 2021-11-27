export type CookingState = {
  isCooking: boolean;
  currentStep: number;
  setIsCooking: (isCooking: boolean) => void;
  setCurrentStep: (stepNumber: number) => void;
  reset: () => void;
};
