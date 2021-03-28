import { format } from "date-fns";
import { Flex, Text, Button } from "@chakra-ui/react";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface HeaderProps {
  currentMonth: Date;
  onPrevMonth: (e: React.MouseEvent) => void;
  onNextMonth: (e: React.MouseEvent) => void;
}

const Header = ({ currentMonth, onPrevMonth, onNextMonth }: HeaderProps) => {
  return (
    <Flex
      w="100%"
      p={2}
      border="1px"
      borderColor="gray.100"
      borderRadius="lg"
      align="center"
      justify="space-between"
    >
      <Button size="sm" variant="ghost" onClick={onPrevMonth}>
        <MdKeyboardArrowLeft />
      </Button>
      <Text fontSize="sm" fontWeight="bold" color="teal.500" cursor="default">
        {format(currentMonth, "MMMM")} - {format(currentMonth, "yyyy")}
      </Text>
      <Button size="sm" variant="ghost" onClick={onNextMonth}>
        <MdKeyboardArrowRight />
      </Button>
    </Flex>
  );
};

export default Header;
