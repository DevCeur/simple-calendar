import { useContext } from "react";
import {
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  isToday,
  isBefore,
  addDays,
  isSameDay,
} from "date-fns";
import {
  Badge,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

import { CalendarContext } from "context/CalendarContext";

interface CellsProps {
  currentMonth: Date;
}

const Cells = ({ currentMonth }: CellsProps) => {
  const { selectedDate, handleSelectDate } = useContext(CalendarContext);

  const dateFormat = "d";
  const rows = [];

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);

      const cloneDay = day;

      days.push(
        <Box
          key={day.toString()}
          w="100%"
          position="relative"
          p={{ base: 2, md: 6 }}
          py={{ base: 6 }}
          borderBottom="1px"
          borderLeft="1px"
          borderColor="gray.100"
          _last={{
            borderBottom: "1px",
            borderRight: "1px",
            borderColor: "gray.100",
          }}
          bgColor={isBefore(day, new Date()) ? "gray.50" : "transparent"}
          cursor={isBefore(day, new Date()) ? "default" : "pointer"}
          pointerEvents={isBefore(day, new Date()) ? "none" : "all"}
          _hover={{
            bgColor: isBefore(day, new Date()) ? "gray.50" : "teal.50",
          }}
          onClick={() => handleSelectDate(cloneDay!)}
        >
          {isToday(day) && (
            <Center>
              <Badge
                fontSize={{ base: "6px", md: "8px" }}
                position="absolute"
                top="0"
                mx="auto"
                colorScheme="teal"
              >
                Today
              </Badge>
            </Center>
          )}
          {isSameDay(day, selectedDate!) && !isToday(selectedDate!) && (
            <Box
              color="blue.500"
              fontSize="8px"
              position="absolute"
              top="0"
              right="0"
              p={2}
            >
              <RiCheckboxBlankCircleFill />
            </Box>
          )}
          <Text
            fontSize="sm"
            fontWeight={isToday(day) ? "bold" : "regular"}
            color="gray.500"
            textAlign="center"
            _hover={{
              color: isBefore(day, new Date()) ? "gray.500" : "teal.500",
            }}
          >
            {formattedDate}
          </Text>
        </Box>
      );

      day = addDays(day, 1);
    }

    rows.push(
      <Flex
        key={day.toString()}
        w="100%"
        justify="space-between"
        _first={{ borderTop: "1px", borderTopColor: "gray.100" }}
      >
        {days}
      </Flex>
    );
    days = [];
  }

  return (
    <Box w="100%">
      {rows}
      {rows.length === 5 && (
        <Grid gridTemplateColumns="repeat(7, 1fr)">
          {[1, 2, 3, 4, 5, 6, 7].map((fakeDay) => (
            <GridItem>
              <Box
                key={day.toString()}
                w="100%"
                position="relative"
                p={{ base: 2, md: 6 }}
                py={{ base: 6 }}
                borderBottom="1px"
                borderLeft="1px"
                borderColor="gray.100"
                _last={{
                  borderBottom: "1px",
                  borderRight: "1px",
                  borderColor: "gray.100",
                }}
              >
                <Text fontSize="sm" color="gray.200" textAlign="center">
                  -
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Cells;
