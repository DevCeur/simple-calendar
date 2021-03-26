import dayjs from "dayjs";
import { useContext } from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";

import { CalendarContext } from "context/CalendarContext";

const SelectedDate = () => {
  const { selectedDate } = useContext(CalendarContext);

  const dateFormatted = dayjs(selectedDate).format("dddd DD Of MMMM, YYYY");

  return (
    <VStack mt={8} direction="column" spacing={6}>
      <Heading as="h2">Date Selected:</Heading>
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
