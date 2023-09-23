import { Text, Heading, Box } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Nav from "../components/Nav";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Nav />
      <Box pl={5}>
        <Heading>Opps...</Heading>
        <Text pt={3}>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "Unexpected error"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
