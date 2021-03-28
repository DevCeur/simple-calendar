import dayjs from "dayjs";

import { useContext } from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";

import { CalendarContext } from "context/CalendarContext";

const SelectedDate = () => {
  const { selectedDate } = useContext(CalendarContext);

  const dateFormatted = dayjs(selectedDate).format("dddd DD Of MMMM, YYYY");

  return (
    <VStack mt={{ base: 8, lg: 0 }} direction="column" spacing={2}>
      <Heading as="h3">Date Selected:</Heading>
      <Text
        textAlign="center"
        fontSize="lg"
        fontWeight="medium"
        color="gray.500"
      >
        {dateFormatted}
      </Text>
    </VStack>
  );
};

export default SelectedDate;
