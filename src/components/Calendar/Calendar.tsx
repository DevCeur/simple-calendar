import { Flex } from "@chakra-ui/react";

import Header from "components/Header";
import Days from "components/Days";
import Cells from "components/Cells";

const Calendar = () => {
  return (
    <Flex direction="column">
      <Header />
      <Days />
      <Cells />
    </Flex>
  );
};

export default Calendar;
