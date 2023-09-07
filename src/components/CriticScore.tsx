import { Badge } from "@chakra-ui/react";

interface Props {
  critic: number;
}
const CriticScore = ({ critic }: Props) => {
  const color = critic > 75 ? "green" : critic > 60 ? "orange" : "";
  return (
    <Badge fontSize="12px" colorScheme={color} borderRadius="4px">
      {critic}
    </Badge>
  );
};

export default CriticScore;
