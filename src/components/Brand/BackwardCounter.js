import useCounter from "../../hooks/useCounter";
import { Card } from "@components";

const BackwardCounter = () => {
  const [counter] = useCounter("backward");

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
