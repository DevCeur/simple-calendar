import { useContext } from "react";
import { Center, Flex } from "@chakra-ui/react";

import { CalendarContext } from "context/CalendarContext";

import Header from "components/Header";
import Days from "components/Days";
import Cells from "components/Cells";
import SelectedDate from "components/SelectedDate";

const Calendar = () => {
  const { currentMonth, handleNextMonth, handlePrevMonth } = useContext(
    CalendarContext
  );

  return (
    <Center w="100vw">
      <Flex direction="column" maxW={700} w="85%">
        <Header
          currentMonth={currentMonth!}
          onPrevMonth={handlePrevMonth!}
          onNextMonth={handleNextMonth!}
        />
        <Days currentMonth={currentMonth!} />
        <Cells currentMonth={currentMonth!} />
        <SelectedDate />
      </Flex>
    </Center>
  );
};

export default Calendar;
