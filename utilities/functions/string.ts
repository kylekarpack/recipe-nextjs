const stepNumberRegex = /^(\<p\>)?(\<strong\>)?[0-9]+\.\s?(\<\/strong\>)?/;

export const removeStepNumber = (step: string): string => {
  if (step) {
    return step.replace(stepNumberRegex, "");
  }
  return step;
};
