import { FunctionComponent } from "react";
import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";

const ErrorMessage: FunctionComponent = ({ children }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

export default ErrorMessage;
