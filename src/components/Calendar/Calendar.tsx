import { useContext } from "react";
import { Center, Flex } from "@chakra-ui/react";

import { CalendarContext } from "context/CalendarContext";

import Header from "components/Header";
import Days from "components/Days";
import Cells from "components/Cells";
import SelectedDate from "components/SelectedDate";
import { isToday } from "date-fns";

const Calendar = () => {
  const {
    currentMonth,
    selectedDate,
    handleNextMonth,
    handlePrevMonth,
  } = useContext(CalendarContext);

  return (
    <Center w="100vw">
      <Flex
        direction={{ base: "column", lg: "row" }}
        maxW={1024}
        w={{ base: "90%", md: "80%" }}
        justify={!isToday(selectedDate) ? "space-between" : "center"}
      >
        <Flex
          direction="column"
          w={{ base: "100%", lg: "65%" }}
          mb={{ base: 8, lg: 0 }}
        >
          <Header
            currentMonth={currentMonth!}
            onPrevMonth={handlePrevMonth!}
            onNextMonth={handleNextMonth!}
          />
          <Days currentMonth={currentMonth!} />
          <Cells currentMonth={currentMonth!} />
        </Flex>
        {!isToday(selectedDate) && <SelectedDate />}
      </Flex>
    </Center>
  );
};

export default Calendar;
