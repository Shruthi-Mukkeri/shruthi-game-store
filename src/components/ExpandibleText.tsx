import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandibleText = ({ children }: Props) => {
  const [expand, setExpand] = useState(false);
  const limit = 300;
  //   if (!children) return;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = expand ? children : children.slice(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        ml={1}
        onClick={() => setExpand(!expand)}
      >
        {expand ? "Show Less" : "ReadMore"}
      </Button>
    </Text>
  );
};

export default ExpandibleText;
