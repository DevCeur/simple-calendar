import { createContext, useState } from "react";
import { addMonths, subMonths } from "date-fns";

interface ContextProps {
  currentMonth: Date;
  selectedDate: Date;
  handleNextMonth: () => void;
  handlePrevMonth: () => void;
  handleSelectDate: (date: Date) => void;
}

export const CalendarContext = createContext<ContextProps>({
  currentMonth: new Date(),
  selectedDate: new Date(),
  handleNextMonth: () => {},
  handlePrevMonth: () => {},
  handleSelectDate: (date: Date) => {},
});

CalendarContext.displayName = "CalendarContext";

export const CalendarContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState({
    currentMonth: new Date(),
    selectedDate: new Date(),
  });

  const handlePrevMonth = () => {
    setState({ ...state, currentMonth: subMonths(state.currentMonth, 1) });
  };

  const handleNextMonth = () => {
    setState({ ...state, currentMonth: addMonths(state.currentMonth, 1) });
  };

  const handleSelectDate = (date: Date) => {
    setState({ ...state, selectedDate: date });
  };

  return (
    <CalendarContext.Provider
      value={{ ...state, handleSelectDate, handleNextMonth, handlePrevMonth }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
