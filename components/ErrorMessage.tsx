import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";
import { FunctionComponent } from "react";

const ErrorMessage: FunctionComponent = ({ children }) => (
  <Alert status="error">
    <AlertIcon />
    <AlertDescription>{children}</AlertDescription>
  </Alert>
);

export default ErrorMessage;
