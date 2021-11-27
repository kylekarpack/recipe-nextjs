import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";
import { FunctionComponent } from "react";

/**
 * Display an error message, typically resulting from a GraphQL query error
 */
const ErrorMessage: FunctionComponent = ({ children }) => (
  <Alert status="error">
    <AlertIcon />
    <AlertDescription>{children}</AlertDescription>
  </Alert>
);

export default ErrorMessage;
