type CookingStateModifiers = {
  setIsCooking: (isCooking: boolean) => void;
  setCurrentStep: (stepNumber: number) => void;
  reset: () => void;
};

/**
 * Track current cooking state
 */
export type CookingStateValues = {
  isCooking: boolean;
  currentStep: number;
};

/**
 * Manage getting and setting cooking state
 */
export type CookingState = CookingStateValues & CookingStateModifiers;
