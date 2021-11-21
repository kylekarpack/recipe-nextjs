const stepNumberRegex = /^(\<p\>)?\s?(\<strong\>)?\s?[0-9]+\.\s?(\<\/strong\>)?/;

/**
 * Remove numeric values that might precede a step's contents
 */
export const removeStepNumber = (stepText: string): string => {
  if (!stepText) {
    return "";
  }
  return stepText.replace(stepNumberRegex, "").trim();
};
