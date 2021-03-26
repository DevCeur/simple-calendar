import { useState } from "react";
import { addMonths, subMonths } from "date-fns/esm";
import { Center, Flex } from "@chakra-ui/react";

import Header from "components/Header";
import Days from "components/Days";
import Cells from "components/Cells";

const Calendar = () => {
  const [dates, setDates] = useState({
    currentMonth: new Date(),
    selectedMonth: new Date(),
  });

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    setDates({ ...dates, currentMonth: addMonths(dates.currentMonth, 1) });
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    setDates({ ...dates, currentMonth: subMonths(dates.currentMonth, 1) });
  };

  return (
    <Center w="100vw" h="100vh">
      <Flex direction="column" maxW={700} w="85%">
        <Header
          currentMonth={dates.currentMonth}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
        />
        <Days currentMonth={dates.currentMonth} />
        <Cells />
      </Flex>
    </Center>
  );
};

export default Calendar;
