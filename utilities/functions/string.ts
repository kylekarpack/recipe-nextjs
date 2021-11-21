const stepNumberRegex = /^(\<p\>)?\s?(\<strong\>)?\s?[0-9]+\.\s?(\<\/strong\>)?/;

export const removeStepNumber = (step: string): string => {
  if (step) {
    return step.replace(stepNumberRegex, "").trim();
  }
  return step;
};
