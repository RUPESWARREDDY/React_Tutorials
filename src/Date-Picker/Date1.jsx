import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { isWeekend, isBefore, isToday } from 'date-fns';
import './Style.css'
const DatepickerComponent = () => {
  const today = new Date();

  // Disable weekends (Saturday and Sunday)
  const isWeekendDisabled = (date) => isWeekend(date);

  // Disable past dates
  const isPastDateDisabled = (date) => isBefore(date, today);

  return (
    <div>
      <DatePicker
        selected={today}
        onChange={(date) => console.log(date)}
        minDate={today} // Disable past dates
        filterDate={(date) => !isWeekendDisabled(date) && !isPastDateDisabled(date)} // Disable weekends and past dates
        inline // Display datepicker inline, remove this if you want a popup
        // todayButton="Today" // Make today's date button visible
      />
    </div>
  );
};

export default DatepickerComponent;
