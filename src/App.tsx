import { CalendarContextProvider } from "context/CalendarContext";

import Calendar from "components/Calendar";
import { Box, Heading } from "@chakra-ui/layout";

const App = () => {
  return (
    <CalendarContextProvider>
      <Box mb={12}>
        <Heading
          color="teal.800"
          mt={12}
          my={{ base: 8, md: 12 }}
          textAlign="center"
        >
          Simple React Calendar
        </Heading>
        <Calendar />
      </Box>
    </CalendarContextProvider>
  );
};

export default App;
