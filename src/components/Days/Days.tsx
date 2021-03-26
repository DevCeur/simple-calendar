import { format, addDays, startOfWeek } from "date-fns";
import { Box, Flex, Text } from "@chakra-ui/react";

interface DaysProps {
  currentMonth: Date;
}

const Days = ({ currentMonth }: DaysProps) => {
  const dateFormat = "iii";
  const days = [1, 2, 3, 4, 5, 6, 7];

  const startDate = startOfWeek(currentMonth);

  return (
    <Flex
      w="100%"
      align="center"
      justify="space-between"
      borderBottom="1px"
      borderBottomColor="gray.100"
      pb={4}
      my={4}
    >
      {days.map((day, i) => (
        <Box w="100%" key={day.toString()}>
          <Text
            textAlign="center"
            fontSize="xs"
            fontWeight="semibold"
            color="gray.500"
            borderX="1px"
            borderColor="gray.100"
          >
            {format(addDays(startDate, i), dateFormat)}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default Days;
