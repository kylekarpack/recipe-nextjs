const stepNumberRegex = /^(<p>)?\s?(<strong>)?\s?\d+\.\s?(<\/strong>)?/;

/**
 * Remove numeric values that might precede a step's contents
 * @example Change "1. Step" to "Step"
 */
export const removeStepNumber = (stepText: string): string => {
  if (!stepText) {
    return "";
  }
  return stepText.replace(stepNumberRegex, "").trim();
};
